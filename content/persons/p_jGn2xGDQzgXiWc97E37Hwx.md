---
schema: wang-person/v1
id: p_jGn2xGDQzgXiWc97E37Hwx
status: active
merged_into: null
display_name: 王汝煒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fWY4n17ePs9nvYWqMERdmh
        subject_person_id: p_jGn2xGDQzgXiWc97E37Hwx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_erV95KKhavCXEkanpCcTBG
          claim_id: c_fWY4n17ePs9nvYWqMERdmh
          source_id: s_KBQ1eKE7rZT1AY7QNvL8QD
          stance: supports
          locator: CBDB:570693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570693）
          source: &a1
            id: s_KBQ1eKE7rZT1AY7QNvL8QD
            source_type: api_record
            title: 中国历代人物传记资料库：王汝煒（CBDB 570693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570693&o=json
            external_identifier: CBDB:570693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5g8jMbb9ENUjm8JQj4WzR
        subject_person_id: p_jGn2xGDQzgXiWc97E37Hwx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝煒，清人物。籍贯會稽。（中国历代人物传记资料库 CBDB 570693）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4-Uk9KqSTm8SWjDJwkOEXI
          claim_id: c_F5g8jMbb9ENUjm8JQj4WzR
          source_id: s_KBQ1eKE7rZT1AY7QNvL8QD
          stance: supports
          locator: CBDB:570693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2Itvk625ndT9EeRCcAXjVL
        subject_person_id: p_jGn2xGDQzgXiWc97E37Hwx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bF4vPwgFCDn6EHfACfY1sU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rrc02CVuj6LVcYvAsviLXx
          claim_id: c_2Itvk625ndT9EeRCcAXjVL
          source_id: s_qtkhRh1kTVzEAuLXvMq1iW
          stance: supports
          locator: 紹興府志:八十卷，lgid=316839：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qtkhRh1kTVzEAuLXvMq1iW
            source_type: api_record
            title: 中国历代人物传记资料库：王鎖姑（CBDB 570692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570692&o=json
            external_identifier: CBDB:570692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bF4vPwgFCDn6EHfACfY1sU
        status: active
        display_name: 王鎖姑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝煒 | accepted |
| bio.summary | 王汝煒，清人物。籍贯會稽。（中国历代人物传记资料库 CBDB 570693） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bF4vPwgFCDn6EHfACfY1sU | 王鎖姑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝煒（CBDB 570693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570693&o=json)
- [中国历代人物传记资料库：王鎖姑（CBDB 570692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570692&o=json)
