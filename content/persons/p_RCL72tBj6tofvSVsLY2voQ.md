---
schema: wang-person/v1
id: p_RCL72tBj6tofvSVsLY2voQ
status: active
merged_into: null
display_name: 王希孟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HsT74PQ1LgNY3e5XfsLQqe
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZz3vDuSywYLfDBsMVr1SZ
          claim_id: c_HsT74PQ1LgNY3e5XfsLQqe
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: CBDB:126545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126545）
          source: &a1
            id: s_haJh8AsiWPwqHqRaG4AuhG
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 126545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126545&o=json
            external_identifier: CBDB:126545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nVgVyUixkL5ys5sGcZfxRW
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKeqMF4GA8WF6Z4xQXLpUZ
          claim_id: c_nVgVyUixkL5ys5sGcZfxRW
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PqAn9Jh7aSaqCMASMWm7SA
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Wbvx4iXFJfPta5mcpby3L
          claim_id: c_PqAn9Jh7aSaqCMASMWm7SA
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r5qq48QQhYnPHBVJDfZiCd
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C2jvAtW3Hc8SZNCkRZDACx
          claim_id: c_r5qq48QQhYnPHBVJDfZiCd
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9WKXfZh9J0mtcmhcXDcpZo
        subject_person_id: p_1AkPLN4jpbDDRN9hsKXn8b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCL72tBj6tofvSVsLY2voQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mG7VGK7GyTkfLK2rADHvtw
          claim_id: c_9WKXfZh9J0mtcmhcXDcpZo
          source_id: s_H4jFAwgWWBH9gKFtqHk52X
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source:
            id: s_H4jFAwgWWBH9gKFtqHk52X
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 274561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274561&o=json
            external_identifier: CBDB:274561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1AkPLN4jpbDDRN9hsKXn8b
        status: active
        display_name: 王安
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lzmTaT4dPxxBYWb0pCx03K
        subject_person_id: p_SbrXp7MmBDQe8Ew48WyHUM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RCL72tBj6tofvSVsLY2voQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xDvR7NE5qmHPAK95HumIDC
          claim_id: c_lzmTaT4dPxxBYWb0pCx03K
          source_id: s_m21docN3irQGPH5tihRQvg
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第九十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m21docN3irQGPH5tihRQvg
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 274560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274560&o=json
            external_identifier: CBDB:274560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SbrXp7MmBDQe8Ew48WyHUM
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希孟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希孟 | accepted |
| birth.date | 1475年 | accepted |
| death.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1AkPLN4jpbDDRN9hsKXn8b | 王安 | accepted |
| ancestors | p_SbrXp7MmBDQe8Ew48WyHUM | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 274561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274561&o=json)
- [中国历代人物传记资料库：王敬（CBDB 274560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274560&o=json)
- [中国历代人物传记资料库：王希孟（CBDB 126545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126545&o=json)
