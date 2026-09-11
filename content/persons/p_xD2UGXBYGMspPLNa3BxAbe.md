---
schema: wang-person/v1
id: p_xD2UGXBYGMspPLNa3BxAbe
status: active
merged_into: null
display_name: 王齊丘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFG7fpXKGc8BPdiYd4ax87
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊丘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i3uHE2SAafkcZBvrr7qWPc
          claim_id: c_JFG7fpXKGc8BPdiYd4ax87
          source_id: s_48WBpyvYfpWTXsNqbB66pn
          stance: supports
          locator: CBDB:140256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140256）
          source: &a1
            id: s_48WBpyvYfpWTXsNqbB66pn
            source_type: api_record
            title: 中国历代人物传记资料库：王齊丘（CBDB 140256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140256&o=json
            external_identifier: CBDB:140256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.203Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PcmFoXbb5KAGE3hYALWfnU
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 651年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvv8KMveBwbk91tdTr66sW
          claim_id: c_PcmFoXbb5KAGE3hYALWfnU
          source_id: s_48WBpyvYfpWTXsNqbB66pn
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
        id: c_vs67D7p8uz8BWxDW9c2fo8
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 709年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DUPU7Ny9RpJzQTth6se627
          claim_id: c_vs67D7p8uz8BWxDW9c2fo8
          source_id: s_48WBpyvYfpWTXsNqbB66pn
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
        id: c_cpomEw2isKYdffW8NXke26
        subject_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊丘（651年—709年），唐人物。籍贯河東。（中国历代人物传记资料库 CBDB 140256）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kLZcFqitK3okn8K7HyoX-w
          claim_id: c_cpomEw2isKYdffW8NXke26
          source_id: s_48WBpyvYfpWTXsNqbB66pn
          stance: supports
          locator: CBDB:140256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9LRHKgP02vJY4NyM5YxNG4
        subject_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STpC0fyWcgVFtawD8j5hiL
          claim_id: c_9LRHKgP02vJY4NyM5YxNG4
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tCfD8QjcvmuW2fCStLZSoK
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 139708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json
            external_identifier: CBDB:139708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ChwVo4Bn3TwGaT9qN5VSo6
        status: active
        display_name: 王烈
        merged_into_person_id: null
    - claim:
        id: c_VIEUC8sk0po7ZHGmk2lbXq
        subject_person_id: p_gnFqJr76x2JRJW6pCv6HNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xD2UGXBYGMspPLNa3BxAbe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79I2HT0_3z3xSseLv9V8Uw
          claim_id: c_VIEUC8sk0po7ZHGmk2lbXq
          source_id: s_epjzLjwGWDkLp8WNpyA6tv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 29：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_epjzLjwGWDkLp8WNpyA6tv
            source_type: api_record
            title: 中国历代人物传记资料库：王彥威（CBDB 150821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150821&o=json
            external_identifier: CBDB:150821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gnFqJr76x2JRJW6pCv6HNt
        status: active
        display_name: 王彥威
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王齊丘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊丘 | accepted |
| birth.date | 651年 | accepted |
| death.date | 709年 | accepted |
| bio.summary | 王齊丘（651年—709年），唐人物。籍贯河東。（中国历代人物传记资料库 CBDB 140256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ChwVo4Bn3TwGaT9qN5VSo6 | 王烈 | accepted |
| parents | p_gnFqJr76x2JRJW6pCv6HNt | 王彥威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 139708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json)
- [中国历代人物传记资料库：王齊丘（CBDB 140256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140256&o=json)
- [中国历代人物传记资料库：王彥威（CBDB 150821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150821&o=json)
