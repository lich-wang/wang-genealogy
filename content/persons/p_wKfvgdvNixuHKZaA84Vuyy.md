---
schema: wang-person/v1
id: p_wKfvgdvNixuHKZaA84Vuyy
status: active
merged_into: null
display_name: 王桂
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPkkM3pBPUcJxaQZ9miaLd
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SisS6cB8NnWGyZVeyAr8xw
          claim_id: c_BPkkM3pBPUcJxaQZ9miaLd
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
          stance: supports
          locator: CBDB:38084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38084）
          source: &a1
            id: s_7h1Zwe6mg1j6B2XYn4629k
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 38084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38084&o=json
            external_identifier: CBDB:38084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tzZ2HQPvWcyo6yNsgrCSCh
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1252年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5LgsYsH26u44h2MCUMe2Cr
          claim_id: c_tzZ2HQPvWcyo6yNsgrCSCh
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
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
        id: c_kf8G4PAgFVzpqQeJKFMqJp
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1339年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FGQZtcWGshVYQ2tHy6jpgB
          claim_id: c_kf8G4PAgFVzpqQeJKFMqJp
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
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
        id: c_jwC3k3kJr4JdwUETknUNmY
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3p2eaKPfnAwBChwRqXHWbS
          claim_id: c_jwC3k3kJr4JdwUETknUNmY
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sHYwmakEeEb8FnK2taegWV
        subject_person_id: p_YCDC8nWisd4Vn1Hr4hiKmH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GDBVfIM3vlL-CXLkH62Vxi
          claim_id: c_sHYwmakEeEb8FnK2taegWV
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王徽 ⇄ 玄孫;四世孫 王桂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_YCDC8nWisd4Vn1Hr4hiKmH
        status: active
        display_name: 王徽
        merged_into_person_id: null
    - claim:
        id: c_vHFvCl8NruTXp4uBPRpARi
        subject_person_id: p_WNe6hDfHpUq7znyP4H9mA8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rOmDgUEAeD8Grsk_ZEil8_
          claim_id: c_vHFvCl8NruTXp4uBPRpARi
          source_id: s_7h1Zwe6mg1j6B2XYn4629k
          stance: supports
          locator: CBDB 双向互证（曾祖 王師伋 ⇄ 曾孫; 重孫 王桂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WNe6hDfHpUq7znyP4H9mA8
        status: active
        display_name: 王師伋
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_N2eIorc2Ph0PiyJIpQSMpa
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F7dPZ8NVqALpqkyFpA8QsD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sgfABqvC2nlGWYi5uLFtcJ
          claim_id: c_N2eIorc2Ph0PiyJIpQSMpa
          source_id: s_yYgwofJbE8G2wkpT4YaSR4
          stance: supports
          locator: CBDB 双向互证（祖父 王桂 ⇄ 孫 王坦）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_yYgwofJbE8G2wkpT4YaSR4
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 386305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386305&o=json
            external_identifier: CBDB:386305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F7dPZ8NVqALpqkyFpA8QsD
        status: active
        display_name: 王坦
        merged_into_person_id: null
    - claim:
        id: c_4JHY6hp3fJxE1dyWGH0ovw
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fWcTq14Z8RcwDAvWLTmyvi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2o9fGM7qYiLOnCAaqOMgeb
          claim_id: c_4JHY6hp3fJxE1dyWGH0ovw
          source_id: s_qeJTJfMshpcZGKA66Nmzkw
          stance: supports
          locator: CBDB 双向互证（祖父 王桂 ⇄ 孫 王塤）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_qeJTJfMshpcZGKA66Nmzkw
            source_type: api_record
            title: 中国历代人物传记资料库：王塤（CBDB 386306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386306&o=json
            external_identifier: CBDB:386306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fWcTq14Z8RcwDAvWLTmyvi
        status: active
        display_name: 王塤
        merged_into_person_id: null
  other: []
---

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| birth.date | 1252年 | accepted |
| death.date | 1339年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_YCDC8nWisd4Vn1Hr4hiKmH | 王徽 | accepted |
| ancestors | p_WNe6hDfHpUq7znyP4H9mA8 | 王師伋 | accepted |
| descendants | p_F7dPZ8NVqALpqkyFpA8QsD | 王坦 | accepted |
| descendants | p_fWcTq14Z8RcwDAvWLTmyvi | 王塤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 38084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38084&o=json)
- [中国历代人物传记资料库：王坦（CBDB 386305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386305&o=json)
- [中国历代人物传记资料库：王塤（CBDB 386306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386306&o=json)
