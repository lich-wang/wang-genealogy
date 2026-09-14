---
schema: wang-person/v1
id: p_NKDBjDH5rA2rPZeJXPzJ9F
status: active
merged_into: null
display_name: 王庭珍
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nRaZrobFKT6xzP9ws5kaRn
        subject_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7kC9mgfbQvRbjmQg93X7Jd
          claim_id: c_nRaZrobFKT6xzP9ws5kaRn
          source_id: s_HctuhywUZjHWcQNfkAZKgD
          stance: supports
          locator: CBDB:12169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12169）
          source: &a1
            id: s_HctuhywUZjHWcQNfkAZKgD
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QMTUN31h994PKS8ApiKKeJ
        subject_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1088年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bm7brEeu7PBG23cbAiiNxj
          claim_id: c_QMTUN31h994PKS8ApiKKeJ
          source_id: s_HctuhywUZjHWcQNfkAZKgD
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
        id: c_YEgpxxu8mApN9RSSGMZZPH
        subject_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1142年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gtxq38uMYgqZKssTpGiyLJ
          claim_id: c_YEgpxxu8mApN9RSSGMZZPH
          source_id: s_HctuhywUZjHWcQNfkAZKgD
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
        id: c_CUNrEHySfk6JYNPk9zp1fJ
        subject_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭珍（1088年—1142年），宋人物。籍贯安福，身份为富豪。（中国历代人物传记资料库 CBDB 12169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KWb2Rmshjad4_2QcHUFTdD
          claim_id: c_CUNrEHySfk6JYNPk9zp1fJ
          source_id: s_HctuhywUZjHWcQNfkAZKgD
          stance: supports
          locator: CBDB:12169
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rfK3IMfH8aKeLGd0IejIlS
        subject_person_id: p_aJHB8uUyaHpd9K8Jr2QCM3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdAUXOq3O63E2bClNly0fg
          claim_id: c_rfK3IMfH8aKeLGd0IejIlS
          source_id: s_5GvIPbvrsoRvertuerohHj
          stance: supports
          locator: CBDB 亲属：父（KinPerson 12166）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_5GvIPbvrsoRvertuerohHj
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJHB8uUyaHpd9K8Jr2QCM3
        status: active
        display_name: 王奭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_SZmMtRkJZXYZUNGBlOMMC4
        subject_person_id: p_7iC5uF8bUt3SWiQyDWsGWp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LTsF9hqziF8FjVG4S7fmn7
          claim_id: c_SZmMtRkJZXYZUNGBlOMMC4
          source_id: s_5GvIPbvrsoRvertuerohHj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12158 王庭珪）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5GvIPbvrsoRvertuerohHj
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7iC5uF8bUt3SWiQyDWsGWp
        status: active
        display_name: 王庭珪
        merged_into_person_id: null
    - claim:
        id: c_SE3DPdIufVA4ZyRFEPzUiX
        subject_person_id: p_M19oFx28z6UHMwn5fL36T6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kcWIUuFyHx8_4UwpyP0n_A
          claim_id: c_SE3DPdIufVA4ZyRFEPzUiX
          source_id: s_5GvIPbvrsoRvertuerohHj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 12167 王庭璋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5GvIPbvrsoRvertuerohHj
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M19oFx28z6UHMwn5fL36T6
        status: active
        display_name: 王庭璋
        merged_into_person_id: null
    - claim:
        id: c_5BOdidQO6HYI3P_Rd3CJkH
        subject_person_id: p_NKDBjDH5rA2rPZeJXPzJ9F
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UXAHPSwvUShfssjz4sgNgP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o1Opz3ABaOjgMiF2Cl_MOZ
          claim_id: c_5BOdidQO6HYI3P_Rd3CJkH
          source_id: s_5GvIPbvrsoRvertuerohHj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 12168 王庭瑋）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5GvIPbvrsoRvertuerohHj
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珍（CBDB 12169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json
            external_identifier: CBDB:12169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UXAHPSwvUShfssjz4sgNgP
        status: active
        display_name: 王庭瑋
        merged_into_person_id: null
---

# 王庭珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭珍 | accepted |
| birth.date | 1088年 | accepted |
| death.date | 1142年 | accepted |
| bio.summary | 王庭珍（1088年—1142年），宋人物。籍贯安福，身份为富豪。（中国历代人物传记资料库 CBDB 12169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aJHB8uUyaHpd9K8Jr2QCM3 | 王奭 | accepted |
| other | p_7iC5uF8bUt3SWiQyDWsGWp | 王庭珪 | accepted |
| other | p_M19oFx28z6UHMwn5fL36T6 | 王庭璋 | accepted |
| other | p_UXAHPSwvUShfssjz4sgNgP | 王庭瑋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭珍（CBDB 12169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12169&o=json)
