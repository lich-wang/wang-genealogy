---
schema: wang-person/v1
id: p_YGiv39GBAC5sbLNAGAUY7T
status: active
merged_into: null
display_name: 王贇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G53uyvZCJXZ38xeoDKd1mU
        subject_person_id: p_YGiv39GBAC5sbLNAGAUY7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZEiXW2SyFoDGdUu3fP51mw
          claim_id: c_G53uyvZCJXZ38xeoDKd1mU
          source_id: s_k9BneUmB8yCk1YvHgP7s9U
          stance: supports
          locator: CBDB:148836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148836）
          source: &a1
            id: s_k9BneUmB8yCk1YvHgP7s9U
            source_type: api_record
            title: 中国历代人物传记资料库：王贇（CBDB 148836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148836&o=json
            external_identifier: CBDB:148836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.774Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VKqNfY8bZVRuMLDbb5GXat
        subject_person_id: p_YGiv39GBAC5sbLNAGAUY7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贇，唐人物。籍贯太原，曾任王府文學、州司馬。（中国历代人物传记资料库 CBDB 148836）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cd730044o4Sudp7stMogLH
          claim_id: c_VKqNfY8bZVRuMLDbb5GXat
          source_id: s_k9BneUmB8yCk1YvHgP7s9U
          stance: supports
          locator: CBDB:148836
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2GWK-tLCTvh21a8cMvtjMC
        subject_person_id: p_YGiv39GBAC5sbLNAGAUY7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ChwVo4Bn3TwGaT9qN5VSo6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NatcDAmtJTDDAKXzFw2qcj
          claim_id: c_2GWK-tLCTvh21a8cMvtjMC
          source_id: s_tCfD8QjcvmuW2fCStLZSoK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yifeng 18：父
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王贇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贇 | accepted |
| bio.summary | 王贇，唐人物。籍贯太原，曾任王府文學、州司馬。（中国历代人物传记资料库 CBDB 148836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ChwVo4Bn3TwGaT9qN5VSo6 | 王烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 139708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139708&o=json)
- [中国历代人物传记资料库：王贇（CBDB 148836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148836&o=json)
