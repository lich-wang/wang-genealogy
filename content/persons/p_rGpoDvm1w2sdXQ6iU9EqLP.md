---
schema: wang-person/v1
id: p_rGpoDvm1w2sdXQ6iU9EqLP
status: active
merged_into: null
display_name: 王妲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TrBJ3FdktguGG6uG2e6Cdn
        subject_person_id: p_rGpoDvm1w2sdXQ6iU9EqLP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王妲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G9wLbHBmbvqqoSBc4NhQ8w
          claim_id: c_TrBJ3FdktguGG6uG2e6Cdn
          source_id: s_v12tmzcq8XK87c8QdTGweX
          stance: supports
          locator: CBDB:134243
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134243）
          source: &a1
            id: s_v12tmzcq8XK87c8QdTGweX
            source_type: api_record
            title: 中国历代人物传记资料库：王妲（CBDB 134243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134243&o=json
            external_identifier: CBDB:134243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.322Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vut8bKaXEfGCr6wLVMELau
        subject_person_id: p_rGpoDvm1w2sdXQ6iU9EqLP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王妲，史料所见人物。本项目依据《中国历代人物传记资料库：王妲（CBDB 134243）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tk3j89QIjUJ4L73Syq5-JT
          claim_id: c_Vut8bKaXEfGCr6wLVMELau
          source_id: s_v12tmzcq8XK87c8QdTGweX
          stance: supports
          locator: CBDB:134243
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
  spouses:
    - claim:
        id: c_s3Q7VVFSKUUu8tJZaAosOy
        subject_person_id: p_rGpoDvm1w2sdXQ6iU9EqLP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mx6R6mGz1zL36hcQnnaruE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9hOsLWMki-ao9nrTlVrrUj
          claim_id: c_s3Q7VVFSKUUu8tJZaAosOy
          source_id: s_KXwCVCFsGglufllC4QF3vb
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1741, HuWenKai #235：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KXwCVCFsGglufllC4QF3vb
            source_type: api_record
            title: 中国历代人物传记资料库：顧虹橋（CBDB 134242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134242&o=json
            external_identifier: CBDB:134242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mx6R6mGz1zL36hcQnnaruE
        status: active
        display_name: 顧虹橋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王妲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王妲 | accepted |
| bio.summary | 王妲，史料所见人物。本项目依据《中国历代人物传记资料库：王妲（CBDB 134243）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mx6R6mGz1zL36hcQnnaruE | 顧虹橋 | accepted |

## 外部来源

- [中国历代人物传记资料库：顧虹橋（CBDB 134242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134242&o=json)
- [中国历代人物传记资料库：王妲（CBDB 134243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134243&o=json)
