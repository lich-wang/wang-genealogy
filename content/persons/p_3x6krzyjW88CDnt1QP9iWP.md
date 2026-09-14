---
schema: wang-person/v1
id: p_3x6krzyjW88CDnt1QP9iWP
status: active
merged_into: null
display_name: 王珪
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xwYDVgDw9FRMAEGF2etJsK
        subject_person_id: p_3x6krzyjW88CDnt1QP9iWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2YWYcurxLpsPaXQBP8hczS
          claim_id: c_xwYDVgDw9FRMAEGF2etJsK
          source_id: s_FKGBdA3YZXhmDDe4FzfK65
          stance: supports
          locator: CBDB:35383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35383）
          source: &a1
            id: s_FKGBdA3YZXhmDDe4FzfK65
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 35383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35383&o=json
            external_identifier: CBDB:35383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HHwLzNRHUHMPsvjmJCYMQC
        subject_person_id: p_3x6krzyjW88CDnt1QP9iWP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，金人物。籍贯華陰，身份为儒學。（中国历代人物传记资料库 CBDB 35383）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L52OC8ZvuVvUEMaBfCUvME
          claim_id: c_HHwLzNRHUHMPsvjmJCYMQC
          source_id: s_FKGBdA3YZXhmDDe4FzfK65
          stance: supports
          locator: CBDB:35383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ArKAdmUoU8eWnjbS0RrFl7
        subject_person_id: p_fSZQfVXzPXgEPeK78DK476
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3x6krzyjW88CDnt1QP9iWP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HWaivRElXya-8-j9KFy0KC
          claim_id: c_ArKAdmUoU8eWnjbS0RrFl7
          source_id: s_FKGBdA3YZXhmDDe4FzfK65
          stance: supports
          locator: CBDB 双向互证（父 王浩 ⇄ 子 王珪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_fSZQfVXzPXgEPeK78DK476
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children:
    - claim:
        id: c_1EUa8b-s_mzrdsLZvrSFzW
        subject_person_id: p_3x6krzyjW88CDnt1QP9iWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Es8yza8LMXTHzyZARdgEtq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rHAO1zannkWU5ByuUSyD3k
          claim_id: c_1EUa8b-s_mzrdsLZvrSFzW
          source_id: s_AEVxUw3ZoxIfno8SI3mIOK
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35383）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_AEVxUw3ZoxIfno8SI3mIOK
            source_type: api_record
            title: 中国历代人物传记资料库：王安貞（CBDB 35395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json
            external_identifier: CBDB:35395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Es8yza8LMXTHzyZARdgEtq
        status: active
        display_name: 王安貞
        merged_into_person_id: null
    - claim:
        id: c_jdB08yLlLFBLpOgLAO3-t6
        subject_person_id: p_3x6krzyjW88CDnt1QP9iWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SLvyPyRP1KFNoT3zed2XgF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yIsrwLGT9FOis_RYyuW65i
          claim_id: c_jdB08yLlLFBLpOgLAO3-t6
          source_id: s_Tkv5nIvg6aJuw_mMHBjoAF
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35383）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_Tkv5nIvg6aJuw_mMHBjoAF
            source_type: api_record
            title: 中国历代人物传记资料库：王安雅（CBDB 35394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35394&o=json
            external_identifier: CBDB:35394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SLvyPyRP1KFNoT3zed2XgF
        status: active
        display_name: 王安雅
        merged_into_person_id: null
    - claim:
        id: c_kJ5sIHbmKznt5enos4-dEV
        subject_person_id: p_3x6krzyjW88CDnt1QP9iWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dkpoWAkzRy8xsFJfawM6aW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tIynZOpKfn9bZaTrso9MK7
          claim_id: c_kJ5sIHbmKznt5enos4-dEV
          source_id: s_WVu7uebfqX6-5Si-D4Gdzi
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35383）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_WVu7uebfqX6-5Si-D4Gdzi
            source_type: api_record
            title: 中国历代人物传记资料库：王安上（CBDB 35388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35388&o=json
            external_identifier: CBDB:35388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dkpoWAkzRy8xsFJfawM6aW
        status: active
        display_name: 王安上
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，金人物。籍贯華陰，身份为儒學。（中国历代人物传记资料库 CBDB 35383） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fSZQfVXzPXgEPeK78DK476 | 王浩 | accepted |
| children | p_Es8yza8LMXTHzyZARdgEtq | 王安貞 | accepted |
| children | p_SLvyPyRP1KFNoT3zed2XgF | 王安雅 | accepted |
| children | p_dkpoWAkzRy8xsFJfawM6aW | 王安上 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安上（CBDB 35388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35388&o=json)
- [中国历代人物传记资料库：王安雅（CBDB 35394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35394&o=json)
- [中国历代人物传记资料库：王安貞（CBDB 35395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json)
- [中国历代人物传记资料库：王珪（CBDB 35383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35383&o=json)
