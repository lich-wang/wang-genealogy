---
schema: wang-person/v1
id: p_yJ9dRVkDw31LFeFvQaaMCy
status: active
merged_into: null
display_name: 王之佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6gMhfAfRA9FYqBovJ1ME7R
        subject_person_id: p_yJ9dRVkDw31LFeFvQaaMCy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fzgrYcmV8BfSENv1Hu1Bo
          claim_id: c_6gMhfAfRA9FYqBovJ1ME7R
          source_id: s_owVLgryZCTBeL6xaRcTPnZ
          stance: supports
          locator: CBDB:228834
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228834）
          source: &a1
            id: s_owVLgryZCTBeL6xaRcTPnZ
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 228834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json
            external_identifier: CBDB:228834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.567Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7NBjMzryyE4ZDUo3Q8BxQC
        subject_person_id: p_yJ9dRVkDw31LFeFvQaaMCy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐，明人物。萬曆丙戌科進士進士，籍贯濬縣，入仕武生員。（中国历代人物传记资料库 CBDB 228834）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XTz78jzTfsvbdwaZFn5HEB
          claim_id: c_7NBjMzryyE4ZDUo3Q8BxQC
          source_id: s_owVLgryZCTBeL6xaRcTPnZ
          stance: supports
          locator: CBDB:228834
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XDVbWb4U8B6pxWJSKhoucO
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJ9dRVkDw31LFeFvQaaMCy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-Wz4YZatQTGnAUPGNwbg3
          claim_id: c_XDVbWb4U8B6pxWJSKhoucO
          source_id: s_gNqc4tjtV0D1ZS1BkxOkJS
          stance: supports
          locator: CBDB：兄弟 王之彥（207166）之父／母 王衣
          quotation: null
          interpretation_note: 由兄弟关系推断：王之佐 与 王之彥 为同胞（CBDB 记「弟」），王之彥 之父／母即 王之佐 之父／母。
          source:
            id: s_gNqc4tjtV0D1ZS1BkxOkJS
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 228834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json
            external_identifier: CBDB:228834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_53YdPXVcBwoNNtoe9v5t6c
        status: active
        display_name: 王衣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YmGBdlsg2qaaHy1rZ0NI9E
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJ9dRVkDw31LFeFvQaaMCy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSP-WCX0f-OyRYQioxr6qB
          claim_id: c_YmGBdlsg2qaaHy1rZ0NI9E
          source_id: s_gNqc4tjtV0D1ZS1BkxOkJS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207166 王之彥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gNqc4tjtV0D1ZS1BkxOkJS
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 228834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json
            external_identifier: CBDB:228834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oVB52nNYpQKMMkujZuH9Lj
        status: active
        display_name: 王之彥
        merged_into_person_id: null
---

# 王之佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之佐 | accepted |
| bio.summary | 王之佐，明人物。萬曆丙戌科進士進士，籍贯濬縣，入仕武生員。（中国历代人物传记资料库 CBDB 228834） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_53YdPXVcBwoNNtoe9v5t6c | 王衣 | accepted |
| other | p_oVB52nNYpQKMMkujZuH9Lj | 王之彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之佐（CBDB 228834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json)
