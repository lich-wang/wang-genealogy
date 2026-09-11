---
schema: wang-person/v1
id: p_i2w2r4pqgKCHbCESSyk39q
status: active
merged_into: null
display_name: 王泂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eQJjQ4z677JHbuLmnP91Ca
        subject_person_id: p_i2w2r4pqgKCHbCESSyk39q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8BwA8w4mvCofux2mrBCo42
          claim_id: c_eQJjQ4z677JHbuLmnP91Ca
          source_id: s_jmBq745HKeFbb17iznSqUP
          stance: supports
          locator: CBDB:697036
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697036）
          source: &a1
            id: s_jmBq745HKeFbb17iznSqUP
            source_type: api_record
            title: 中国历代人物传记资料库：王泂（CBDB 697036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697036&o=json
            external_identifier: CBDB:697036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.555Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ve5L6Mwo9nJZQgk58QXE1g
        subject_person_id: p_i2w2r4pqgKCHbCESSyk39q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泂，史料所见人物。本项目依据《中国历代人物传记资料库：王泂（CBDB 697036）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3n-Z3KNjNdfZs_W5QZWUQj
          claim_id: c_Ve5L6Mwo9nJZQgk58QXE1g
          source_id: s_jmBq745HKeFbb17iznSqUP
          stance: supports
          locator: CBDB:697036
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2geEKDSB3G8tzZ7fnnYbI5
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_i2w2r4pqgKCHbCESSyk39q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OWSKrXZ6cvJzLmorfs5MNu
          claim_id: c_2geEKDSB3G8tzZ7fnnYbI5
          source_id: s_jmBq745HKeFbb17iznSqUP
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王泂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泂 | accepted |
| bio.summary | 王泂，史料所见人物。本项目依据《中国历代人物传记资料库：王泂（CBDB 697036）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泂（CBDB 697036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697036&o=json)
