---
schema: wang-person/v1
id: p_HUa84XWDNujDpsdaNdZ2Ys
status: active
merged_into: null
display_name: 王錦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JyMm3RL2mCWPBuMvJ9vBA8
        subject_person_id: p_HUa84XWDNujDpsdaNdZ2Ys
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xAFwQhA5PgFxEZQktFBPMq
          claim_id: c_JyMm3RL2mCWPBuMvJ9vBA8
          source_id: s_TetyWGFK3MaiQoiabscpyJ
          stance: supports
          locator: CBDB:247844
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247844）
          source: &a1
            id: s_TetyWGFK3MaiQoiabscpyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 247844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json
            external_identifier: CBDB:247844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VyacR7QfRQRida8fTypHzP
        subject_person_id: p_HUa84XWDNujDpsdaNdZ2Ys
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錦，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247844）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BmKPiOItbi0428jI71NPl1
          claim_id: c_VyacR7QfRQRida8fTypHzP
          source_id: s_TetyWGFK3MaiQoiabscpyJ
          stance: supports
          locator: CBDB:247844
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hYd8B7UXjN6b4kBrRA9Q02
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HUa84XWDNujDpsdaNdZ2Ys
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wbtdzCLDGOiYqiwHLwUUof
          claim_id: c_hYd8B7UXjN6b4kBrRA9Q02
          source_id: s_rlxeLYW5Dve1OjDEzDc6Zz
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王錦 与 王鍃 为同胞（CBDB 记「弟」），王鍃 之父／母即 王錦 之父／母。
          source:
            id: s_rlxeLYW5Dve1OjDEzDc6Zz
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 247844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json
            external_identifier: CBDB:247844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5sZOfIZ8T-8olMK-RPa90E
        subject_person_id: p_HUa84XWDNujDpsdaNdZ2Ys
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCSopuxJAie0UoVY5pnveI
          claim_id: c_5sZOfIZ8T-8olMK-RPa90E
          source_id: s_rlxeLYW5Dve1OjDEzDc6Zz
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rlxeLYW5Dve1OjDEzDc6Zz
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 247844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json
            external_identifier: CBDB:247844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錦 | accepted |
| bio.summary | 王錦，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247844） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王錦（CBDB 247844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247844&o=json)
