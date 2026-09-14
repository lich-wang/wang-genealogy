---
schema: wang-person/v1
id: p_PEhQA5fEbXziCDFGGChCsV
status: active
merged_into: null
display_name: 王橋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pCW6REbz8ENACfMzfm6YE4
        subject_person_id: p_PEhQA5fEbXziCDFGGChCsV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_57AYTFtb4tbMhwbpmyoAU8
          claim_id: c_pCW6REbz8ENACfMzfm6YE4
          source_id: s_NEC2WfXQkEhDCQWXNKCL7G
          stance: supports
          locator: CBDB:329702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329702）
          source: &a1
            id: s_NEC2WfXQkEhDCQWXNKCL7G
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 329702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329702&o=json
            external_identifier: CBDB:329702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.338Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q5g7qrAVEJQBRrooxHp1CP
        subject_person_id: p_PEhQA5fEbXziCDFGGChCsV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王橋，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J4TQJ9lsrNXDRa2mRlCAyp
          claim_id: c_q5g7qrAVEJQBRrooxHp1CP
          source_id: s_NEC2WfXQkEhDCQWXNKCL7G
          stance: supports
          locator: CBDB:329702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VE3GZX0v5s1zN4BXrc86AI
        subject_person_id: p_YHFTAXms1Jyvocf8LFCxJZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PEhQA5fEbXziCDFGGChCsV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WD9_SaD1JvAh0YgC--e9Ab
          claim_id: c_VE3GZX0v5s1zN4BXrc86AI
          source_id: s_w-zJcVJBJMuqngf9hfjI2g
          stance: supports
          locator: CBDB：兄弟 王楣（205205）之父／母 王經
          quotation: null
          interpretation_note: 由兄弟关系推断：王橋 与 王楣 为同胞（CBDB 记「兄」），王楣 之父／母即 王橋 之父／母。
          source:
            id: s_w-zJcVJBJMuqngf9hfjI2g
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 329702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329702&o=json
            external_identifier: CBDB:329702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YHFTAXms1Jyvocf8LFCxJZ
        status: active
        display_name: 王經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9F_R2QSq9PT04ki65Gpt8E
        subject_person_id: p_PEhQA5fEbXziCDFGGChCsV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hoiRRCExCw4KSUTuvH17WP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EVTDEYk2DK-L--RuzyW-z8
          claim_id: c_9F_R2QSq9PT04ki65Gpt8E
          source_id: s_w-zJcVJBJMuqngf9hfjI2g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205205 王楣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w-zJcVJBJMuqngf9hfjI2g
            source_type: api_record
            title: 中国历代人物传记资料库：王橋（CBDB 329702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329702&o=json
            external_identifier: CBDB:329702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hoiRRCExCw4KSUTuvH17WP
        status: active
        display_name: 王楣
        merged_into_person_id: null
---

# 王橋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王橋 | accepted |
| bio.summary | 王橋，明人物。嘉靖四十四年進士，籍贯遵化。（中国历代人物传记资料库 CBDB 329702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YHFTAXms1Jyvocf8LFCxJZ | 王經 | accepted |
| other | p_hoiRRCExCw4KSUTuvH17WP | 王楣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王橋（CBDB 329702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329702&o=json)
