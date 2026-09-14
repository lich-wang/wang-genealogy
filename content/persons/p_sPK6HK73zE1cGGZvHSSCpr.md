---
schema: wang-person/v1
id: p_sPK6HK73zE1cGGZvHSSCpr
status: active
merged_into: null
display_name: 王之賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3dNq9HHS53WB7GShvnxRbr
        subject_person_id: p_sPK6HK73zE1cGGZvHSSCpr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G8mBtPSvqGyCwd125MB3Nu
          claim_id: c_3dNq9HHS53WB7GShvnxRbr
          source_id: s_5frUa9KtRp2LTCsxn7MGMd
          stance: supports
          locator: CBDB:228835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228835）
          source: &a1
            id: s_5frUa9KtRp2LTCsxn7MGMd
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 228835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json
            external_identifier: CBDB:228835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_48g4YVwt13229Eb9oCZchP
        subject_person_id: p_sPK6HK73zE1cGGZvHSSCpr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賓，明人物。萬曆丙戌科進士進士，籍贯濬縣，入仕庠生。（中国历代人物传记资料库 CBDB 228835）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uYpBCTAe9EZ4iyAgaaWV0b
          claim_id: c_48g4YVwt13229Eb9oCZchP
          source_id: s_5frUa9KtRp2LTCsxn7MGMd
          stance: supports
          locator: CBDB:228835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NlGIXE9tvX5QG5pfh7bAix
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sPK6HK73zE1cGGZvHSSCpr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_Ofwp1zTsLn4YPF-uwcLu
          claim_id: c_NlGIXE9tvX5QG5pfh7bAix
          source_id: s_sHMvjgjM3yVXk5_UZBU4Hi
          stance: supports
          locator: CBDB：兄弟 王之彥（207166）之父／母 王衣
          quotation: null
          interpretation_note: 由兄弟关系推断：王之賓 与 王之彥 为同胞（CBDB 记「弟」），王之彥 之父／母即 王之賓 之父／母。
          source:
            id: s_sHMvjgjM3yVXk5_UZBU4Hi
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 228835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json
            external_identifier: CBDB:228835
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
        id: c_wYTwRXx78djxrysp_coMVR
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sPK6HK73zE1cGGZvHSSCpr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7QGREOF5kea0Mq9MuBE27e
          claim_id: c_wYTwRXx78djxrysp_coMVR
          source_id: s_sHMvjgjM3yVXk5_UZBU4Hi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207166 王之彥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sHMvjgjM3yVXk5_UZBU4Hi
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 228835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json
            external_identifier: CBDB:228835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oVB52nNYpQKMMkujZuH9Lj
        status: active
        display_name: 王之彥
        merged_into_person_id: null
---

# 王之賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之賓 | accepted |
| bio.summary | 王之賓，明人物。萬曆丙戌科進士進士，籍贯濬縣，入仕庠生。（中国历代人物传记资料库 CBDB 228835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_53YdPXVcBwoNNtoe9v5t6c | 王衣 | accepted |
| other | p_oVB52nNYpQKMMkujZuH9Lj | 王之彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之賓（CBDB 228835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json)
