---
schema: wang-person/v1
id: p_2BKh9xzYNrFBwSQ8JZFMXU
status: active
merged_into: null
display_name: 王正宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hTxUuoKD3QvJ5S6uFMVt6Q
        subject_person_id: p_2BKh9xzYNrFBwSQ8JZFMXU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n4fBvazEXwvEXhB6tx6tnn
          claim_id: c_hTxUuoKD3QvJ5S6uFMVt6Q
          source_id: s_6sTeGHk7JTRD15QqMHV4tj
          stance: supports
          locator: CBDB:166263
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（166263）
          source: &a1
            id: s_6sTeGHk7JTRD15QqMHV4tj
            source_type: api_record
            title: 中国历代人物传记资料库：王正宗（CBDB 166263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166263&o=json
            external_identifier: CBDB:166263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FKotCKB364xB1SVFqHkfNL
        subject_person_id: p_2BKh9xzYNrFBwSQ8JZFMXU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正宗，史料所见人物。本项目依据《中国历代人物传记资料库：王正宗（CBDB 166263）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i347heaE2u_zYZlr-MEDl4
          claim_id: c_FKotCKB364xB1SVFqHkfNL
          source_id: s_6sTeGHk7JTRD15QqMHV4tj
          stance: supports
          locator: CBDB:166263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Zemb989FHulzvq65a2iss2
        subject_person_id: p_yWhQ95gncKaLFJQGjKBuH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BKh9xzYNrFBwSQ8JZFMXU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAe3b-mWkCF7-d0AG8Ah_G
          claim_id: c_Zemb989FHulzvq65a2iss2
          source_id: s_6sTeGHk7JTRD15QqMHV4tj
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe73：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yWhQ95gncKaLFJQGjKBuH6
        status: active
        display_name: 王涓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正宗 | accepted |
| bio.summary | 王正宗，史料所见人物。本项目依据《中国历代人物传记资料库：王正宗（CBDB 166263）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yWhQ95gncKaLFJQGjKBuH6 | 王涓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正宗（CBDB 166263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166263&o=json)
