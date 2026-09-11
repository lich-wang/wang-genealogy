---
schema: wang-person/v1
id: p_TdovnQSDHPgtdb6L5QzgtZ
status: active
merged_into: null
display_name: 王梴
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BEUu88eXJDZEJG3ctU6tZQ
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eFAPGWxGpfNkeUHDH9nagU
          claim_id: c_BEUu88eXJDZEJG3ctU6tZQ
          source_id: s_5dW9XCt13sjfnC4xEFsoHy
          stance: supports
          locator: CBDB:202789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202789）
          source: &a1
            id: s_5dW9XCt13sjfnC4xEFsoHy
            source_type: api_record
            title: 中国历代人物传记资料库：王梴（CBDB 202789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202789&o=json
            external_identifier: CBDB:202789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mmk7Rc6hhoGr4LQpoGt14A
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1493年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etDh7sQngRsFS96U25rzXw
          claim_id: c_mmk7Rc6hhoGr4LQpoGt14A
          source_id: s_5dW9XCt13sjfnC4xEFsoHy
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z4bXK3t7uTRdYYFd64zxEH
        subject_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梴（生于1493年），明人物。明清進士進士，籍贯象山，入仕進士，曾任布政使司參議、布政使司參政、工部郎中。（中国历代人物传记资料库 CBDB 202789）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JA3IzjhcsFTPUvXedE64cK
          claim_id: c_z4bXK3t7uTRdYYFd64zxEH
          source_id: s_5dW9XCt13sjfnC4xEFsoHy
          stance: supports
          locator: CBDB:202789
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xTI7CCJzeGfkvUZQEA4upw
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWm92R8BxfH1SXFUJfsfle
          claim_id: c_xTI7CCJzeGfkvUZQEA4upw
          source_id: s_Hi4Dfz1rKMoiuGrViGfdTN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hi4Dfz1rKMoiuGrViGfdTN
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 294432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json
            external_identifier: CBDB:294432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2-JulN6C0GSRyv2WDBz0PA
        subject_person_id: p_1gMJ6NpQ7CbPiCgahWrTwG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDyohAfI1Jp67xtww_762A
          claim_id: c_2-JulN6C0GSRyv2WDBz0PA
          source_id: s_BTWFBHpMR6hb3Wanm2MPtX
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BTWFBHpMR6hb3Wanm2MPtX
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 294431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294431&o=json
            external_identifier: CBDB:294431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1gMJ6NpQ7CbPiCgahWrTwG
        status: active
        display_name: 王京
        merged_into_person_id: null
    - claim:
        id: c_h-rXTXreEj5GoCF5ObF9DA
        subject_person_id: p_9H13uhvw1t7EEDU5JE92D9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XxuIb24zXOatU9tvbN60if
          claim_id: c_h-rXTXreEj5GoCF5ObF9DA
          source_id: s_BQprRgv39qvp6Ah1vTgw7H
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BQprRgv39qvp6Ah1vTgw7H
            source_type: api_record
            title: 中国历代人物传记资料库：王在明（CBDB 294430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294430&o=json
            external_identifier: CBDB:294430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9H13uhvw1t7EEDU5JE92D9
        status: active
        display_name: 王在明
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王梴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梴 | accepted |
| birth.date | 1493年 | accepted |
| bio.summary | 王梴（生于1493年），明人物。明清進士進士，籍贯象山，入仕進士，曾任布政使司參議、布政使司參政、工部郎中。（中国历代人物传记资料库 CBDB 202789） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| ancestors | p_1gMJ6NpQ7CbPiCgahWrTwG | 王京 | accepted |
| ancestors | p_9H13uhvw1t7EEDU5JE92D9 | 王在明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梴（CBDB 202789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202789&o=json)
- [中国历代人物传记资料库：王渙（CBDB 294432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294432&o=json)
- [中国历代人物传记资料库：王京（CBDB 294431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294431&o=json)
- [中国历代人物传记资料库：王在明（CBDB 294430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294430&o=json)
