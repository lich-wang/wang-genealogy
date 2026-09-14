---
schema: wang-person/v1
id: p_XgEAQzQVt489QyUMTNB972
status: active
merged_into: null
display_name: 王維城
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fFZzyzZyZVvuo7FT7zAKNp
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DrKBqG2oNEiU6T1AHg73VJ
          claim_id: c_fFZzyzZyZVvuo7FT7zAKNp
          source_id: s_LCWDXinw3oDn5i7TYsgj3r
          stance: supports
          locator: CBDB:700320
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700320）
          source: &a1
            id: s_LCWDXinw3oDn5i7TYsgj3r
            source_type: api_record
            title: 中国历代人物传记资料库：王維城（CBDB 700320）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700320&o=json
            external_identifier: CBDB:700320
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hR9u6uJ3EjpaZhhMBJCpVN
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維城，清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 700320）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H_Do70-tJXzam2-CVz5E2J
          claim_id: c_hR9u6uJ3EjpaZhhMBJCpVN
          source_id: s_LCWDXinw3oDn5i7TYsgj3r
          stance: supports
          locator: CBDB:700320
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6ITCy_eBckYkPrDOmCHY5J
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GWFRAzEGpCz4Hv1DHTKVjt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_toPVoqr3TmBfKLmLtpqRUZ
          claim_id: c_6ITCy_eBckYkPrDOmCHY5J
          source_id: s_LsAjpPazoWfJ62eySmwm5m
          stance: supports
          locator: 錢塘縣志，lgid=219724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LsAjpPazoWfJ62eySmwm5m
            source_type: api_record
            title: 中国历代人物传记资料库：王萬鑑（CBDB 700317）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700317&o=json
            external_identifier: CBDB:700317
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GWFRAzEGpCz4Hv1DHTKVjt
        status: active
        display_name: 王萬鑑
        merged_into_person_id: null
    - claim:
        id: c_0hQ716IjCu4vnTJV2wgwMB
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AVjLopUsjbUfxxtc2TwjsZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ppSTIviBtzyRrZV0uB9VL1
          claim_id: c_0hQ716IjCu4vnTJV2wgwMB
          source_id: s_Xuy1CWpMxX0Vy9AoMlJ3Yb
          stance: supports
          locator: CBDB：兄弟 王萬鑑（700317）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王萬銘 与 王萬鑑 为同胞（CBDB 记「兄」），王萬鑑 之父／母即 王萬銘 之父／母。
          source:
            id: s_Xuy1CWpMxX0Vy9AoMlJ3Yb
            source_type: api_record
            title: 中国历代人物传记资料库：王萬銘（CBDB 700321）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json
            external_identifier: CBDB:700321
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AVjLopUsjbUfxxtc2TwjsZ
        status: active
        display_name: 王萬銘
        merged_into_person_id: null
    - claim:
        id: c_xi82KPJifNNOeVJy9lQ4l_
        subject_person_id: p_XgEAQzQVt489QyUMTNB972
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NmpBnSHZ8AeZZ976mBPCqk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdbPsDo2QGuMxwefikb9RO
          claim_id: c_xi82KPJifNNOeVJy9lQ4l_
          source_id: s_ZWOfrOZh79Fe_Plnu_-mVZ
          stance: supports
          locator: CBDB：兄弟 王萬鑑（700317）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王萬錫 与 王萬鑑 为同胞（CBDB 记「兄」），王萬鑑 之父／母即 王萬錫 之父／母。
          source:
            id: s_ZWOfrOZh79Fe_Plnu_-mVZ
            source_type: api_record
            title: 中国历代人物传记资料库：王萬錫（CBDB 700322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700322&o=json
            external_identifier: CBDB:700322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NmpBnSHZ8AeZZ976mBPCqk
        status: active
        display_name: 王萬錫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維城 | accepted |
| bio.summary | 王維城，清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 700320） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GWFRAzEGpCz4Hv1DHTKVjt | 王萬鑑 | accepted |
| children | p_AVjLopUsjbUfxxtc2TwjsZ | 王萬銘 | accepted |
| children | p_NmpBnSHZ8AeZZ976mBPCqk | 王萬錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬鑑（CBDB 700317）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700317&o=json)
- [中国历代人物传记资料库：王萬銘（CBDB 700321）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700321&o=json)
- [中国历代人物传记资料库：王萬錫（CBDB 700322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700322&o=json)
- [中国历代人物传记资料库：王維城（CBDB 700320）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700320&o=json)
