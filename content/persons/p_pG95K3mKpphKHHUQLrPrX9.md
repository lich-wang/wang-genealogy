---
schema: wang-person/v1
id: p_pG95K3mKpphKHHUQLrPrX9
status: active
merged_into: null
display_name: 王杞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NhAj6F54SC1DYJgPpW2CAw
        subject_person_id: p_pG95K3mKpphKHHUQLrPrX9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Hv1K5LLG68WjnVt5eFAbE
          claim_id: c_NhAj6F54SC1DYJgPpW2CAw
          source_id: s_mR3Xr8Qwd4sN479Ln373EP
          stance: supports
          locator: CBDB:35622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35622）
          source: &a1
            id: s_mR3Xr8Qwd4sN479Ln373EP
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 35622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35622&o=json
            external_identifier: CBDB:35622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EFBA1j7DKaXb8dwBkkGYPA
        subject_person_id: p_pG95K3mKpphKHHUQLrPrX9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杞，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35622）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VVFUYdq-z73jdV1Kd7opS9
          claim_id: c_EFBA1j7DKaXb8dwBkkGYPA
          source_id: s_mR3Xr8Qwd4sN479Ln373EP
          stance: supports
          locator: CBDB:35622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KEAfXOwEZx6LfLwXTolaV-
        subject_person_id: p_PQQ9B9zPBAjRcHDw7hpDP7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pG95K3mKpphKHHUQLrPrX9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PnNRKI4-YT0vzrrFIewtag
          claim_id: c_KEAfXOwEZx6LfLwXTolaV-
          source_id: s_8vFNfSZuSGhdB_9tnxiSGG
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3974）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_8vFNfSZuSGhdB_9tnxiSGG
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 35622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35622&o=json
            external_identifier: CBDB:35622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PQQ9B9zPBAjRcHDw7hpDP7
        status: active
        display_name: 王述
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杞 | accepted |
| bio.summary | 王杞，宋人物。籍贯長洲。（中国历代人物传记资料库 CBDB 35622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PQQ9B9zPBAjRcHDw7hpDP7 | 王述 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杞（CBDB 35622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35622&o=json)
