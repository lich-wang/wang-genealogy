---
schema: wang-person/v1
id: p_yM3Q3hvVcAYjNabsHb8FDL
status: active
merged_into: null
display_name: 王洪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NDS845M31sF5CJDVEaAKG5
        subject_person_id: p_yM3Q3hvVcAYjNabsHb8FDL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WBfz6HbhxA9EyuG1JQ91C5
          claim_id: c_NDS845M31sF5CJDVEaAKG5
          source_id: s_uMf4Lavy1DYChkp3U6CQjd
          stance: supports
          locator: CBDB:271495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271495）
          source: &a1
            id: s_uMf4Lavy1DYChkp3U6CQjd
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 271495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json
            external_identifier: CBDB:271495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oMZ984Ha7qCX5DZSjU9P6A
        subject_person_id: p_yM3Q3hvVcAYjNabsHb8FDL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪，明人物。景泰五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 271495）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TlmkRtxFpdlPpiKWoQNbBt
          claim_id: c_oMZ984Ha7qCX5DZSjU9P6A
          source_id: s_uMf4Lavy1DYChkp3U6CQjd
          stance: supports
          locator: CBDB:271495
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X3CpMnecKevRmythS89YIY
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yM3Q3hvVcAYjNabsHb8FDL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WtwJdKXbxk160eBw-NJ7fi
          claim_id: c_X3CpMnecKevRmythS89YIY
          source_id: s_OyqRWw3IIg8KgISCjHe-cg
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪 与 王稽 为同胞（CBDB 记「弟」），王稽 之父／母即 王洪 之父／母。
          source:
            id: s_OyqRWw3IIg8KgISCjHe-cg
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 271495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json
            external_identifier: CBDB:271495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CUFBtfXaFjfECLb8K9SuBv
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EnN6NtqDlABIE7Yc1TmgKT
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yM3Q3hvVcAYjNabsHb8FDL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbTO8WpwRBKVwok4LwlOxS
          claim_id: c_EnN6NtqDlABIE7Yc1TmgKT
          source_id: s_OyqRWw3IIg8KgISCjHe-cg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OyqRWw3IIg8KgISCjHe-cg
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 271495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json
            external_identifier: CBDB:271495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3vKgPJZPmMS9ZpS2a75EVV
        status: active
        display_name: 王稽
        merged_into_person_id: null
---

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | 王洪，明人物。景泰五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 271495） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CUFBtfXaFjfECLb8K9SuBv | 王忠 | accepted |
| other | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪（CBDB 271495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271495&o=json)
