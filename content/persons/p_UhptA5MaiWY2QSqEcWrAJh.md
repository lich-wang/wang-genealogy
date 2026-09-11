---
schema: wang-person/v1
id: p_UhptA5MaiWY2QSqEcWrAJh
status: active
merged_into: null
display_name: 王毅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p4hvKGKGSeLqwuidUYamaw
        subject_person_id: p_UhptA5MaiWY2QSqEcWrAJh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42cRYxNzHpZ3r71cZuCYrE
          claim_id: c_p4hvKGKGSeLqwuidUYamaw
          source_id: s_ZZGQA1TfsvZnYRTfKq2HUK
          stance: supports
          locator: CBDB:117610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（117610）
          source: &a1
            id: s_ZZGQA1TfsvZnYRTfKq2HUK
            source_type: api_record
            title: 中国历代人物传记资料库：王毅（CBDB 117610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117610&o=json
            external_identifier: CBDB:117610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DzPKmGKuXtkD9RMp13ULtP
        subject_person_id: p_UhptA5MaiWY2QSqEcWrAJh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王毅，元人物。籍贯胙城，曾任翰林國史院典籍。（中国历代人物传记资料库 CBDB 117610）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zLQO7ernRmiI3lYXptzjqB
          claim_id: c_DzPKmGKuXtkD9RMp13ULtP
          source_id: s_ZZGQA1TfsvZnYRTfKq2HUK
          stance: supports
          locator: CBDB:117610
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E1CqGQ8Ne2P6uhlZ7XNgR7
        subject_person_id: p_6vzTrVziNCCHc7ddJU8rdm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UhptA5MaiWY2QSqEcWrAJh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fn4DGi6bwt_71wvZhKaHje
          claim_id: c_E1CqGQ8Ne2P6uhlZ7XNgR7
          source_id: s_VzykP7YtezE5E2ZkxjCo5F
          stance: supports
          locator: CBDB 双向互证（子 王毅 ⇄ 父 王興祖）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_VzykP7YtezE5E2ZkxjCo5F
            source_type: api_record
            title: 中国历代人物传记资料库：王興祖（CBDB 101440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101440&o=json
            external_identifier: CBDB:101440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6vzTrVziNCCHc7ddJU8rdm
        status: active
        display_name: 王興祖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王毅 | accepted |
| bio.summary | 王毅，元人物。籍贯胙城，曾任翰林國史院典籍。（中国历代人物传记资料库 CBDB 117610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6vzTrVziNCCHc7ddJU8rdm | 王興祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王興祖（CBDB 101440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101440&o=json)
- [中国历代人物传记资料库：王毅（CBDB 117610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=117610&o=json)
