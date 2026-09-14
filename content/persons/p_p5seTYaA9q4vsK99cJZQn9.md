---
schema: wang-person/v1
id: p_p5seTYaA9q4vsK99cJZQn9
status: active
merged_into: null
display_name: 王德元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xBWPLUkMS1cC5eNc42T3Jk
        subject_person_id: p_p5seTYaA9q4vsK99cJZQn9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7hFhVWTjJKcHQMeHthT4gA
          claim_id: c_xBWPLUkMS1cC5eNc42T3Jk
          source_id: s_GHZnQDVrczcc7EStSvLcKr
          stance: supports
          locator: CBDB:32341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32341）
          source: &a1
            id: s_GHZnQDVrczcc7EStSvLcKr
            source_type: api_record
            title: 中国历代人物传记资料库：王德元（CBDB 32341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32341&o=json
            external_identifier: CBDB:32341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.052Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JhLjSQnYBoJRZCfpGSoAqz
        subject_person_id: p_p5seTYaA9q4vsK99cJZQn9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德元，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 32341）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eFVXpLXFZDErqt2BefdGkE
          claim_id: c_JhLjSQnYBoJRZCfpGSoAqz
          source_id: s_GHZnQDVrczcc7EStSvLcKr
          stance: supports
          locator: CBDB:32341
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DWIMYb4Cb-LT9tXW2rsXoM
        subject_person_id: p_MAVU5hCjLKU7MKmUEk81nj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p5seTYaA9q4vsK99cJZQn9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z4SHRC-dVTrxo_dCAcSz0G
          claim_id: c_DWIMYb4Cb-LT9tXW2rsXoM
          source_id: s_GUURKYautmUyTSEqTCwfla
          stance: supports
          locator: CBDB 亲属：父（KinPerson 32340）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_GUURKYautmUyTSEqTCwfla
            source_type: api_record
            title: 中国历代人物传记资料库：王德元（CBDB 32341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32341&o=json
            external_identifier: CBDB:32341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MAVU5hCjLKU7MKmUEk81nj
        status: active
        display_name: 王長諧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王德元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德元 | accepted |
| bio.summary | 王德元，唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 32341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MAVU5hCjLKU7MKmUEk81nj | 王長諧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德元（CBDB 32341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32341&o=json)
