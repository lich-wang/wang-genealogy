---
schema: wang-person/v1
id: p_xZVFVfV8CQCzdHSD73eh6H
status: active
merged_into: null
display_name: 王宗某
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P2VdaiR8Lw7GPHpcFQxYb7
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JPzHRsRSn5YtndrEsRo7Ct
          claim_id: c_P2VdaiR8Lw7GPHpcFQxYb7
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
          stance: supports
          locator: CBDB:28618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28618）
          source: &a1
            id: s_uUwq3i4nBW2ea9MsJ581Lw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗某（CBDB 28618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28618&o=json
            external_identifier: CBDB:28618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AbiCVxdcHMw1CHQY3UWzXt
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1257年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JPj7tTjxyREKJZKBUkaR7d
          claim_id: c_AbiCVxdcHMw1CHQY3UWzXt
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
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
        id: c_JdjrgPcTVaAZsHVE5eD3U5
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1323年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eTwni6v2DHrEqS2qDC3U4U
          claim_id: c_JdjrgPcTVaAZsHVE5eD3U5
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
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
        id: c_X34F12k6BBYhHGPpuUx8W5
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗某（1257年—1323年），元人物。籍贯真定，入仕徵辟，曾任縣主簿、行中書省掾、宣慰司令史。（中国历代人物传记资料库 CBDB 28618）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9wpVp6Tm5-XYMzbvxO7wmS
          claim_id: c_X34F12k6BBYhHGPpuUx8W5
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
          stance: supports
          locator: CBDB:28618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lVr-x9chxgnWTRVs-JNhWQ
        subject_person_id: p_ELTFwpJhBRCdcynL2AFhCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aZPJUs6H6LrAWg9BT-ECRC
          claim_id: c_lVr-x9chxgnWTRVs-JNhWQ
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
          stance: supports
          locator: CBDB 双向互证（父 王振艱 ⇄ 子 王宗某）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_ELTFwpJhBRCdcynL2AFhCN
        status: active
        display_name: 王振艱
        merged_into_person_id: null
  children:
    - claim:
        id: c_vLiF06a1L9TGbnCtJGRm6x
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KR1vacK9Wk4VKtR9RaVDsq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DTnO7jroWL53iHOWZC0Qgq
          claim_id: c_vLiF06a1L9TGbnCtJGRm6x
          source_id: s_i4i-eU26IYsG4j2sxwzpB8
          stance: supports
          locator: CBDB 亲属：父（KinPerson 28618）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_i4i-eU26IYsG4j2sxwzpB8
            source_type: api_record
            title: 中国历代人物传记资料库：王洙（CBDB 28623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28623&o=json
            external_identifier: CBDB:28623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KR1vacK9Wk4VKtR9RaVDsq
        status: active
        display_name: 王洙
        merged_into_person_id: null
    - claim:
        id: c_SImd_XJJGwRpXcK7VNu5Vw
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Um72HYcp3p3KFjoRzv1aTv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9FvdSH1n8ppsfyycc-2eLi
          claim_id: c_SImd_XJJGwRpXcK7VNu5Vw
          source_id: s_l6h4WvQVI4gxZU9Q2MLBLu
          stance: supports
          locator: CBDB 亲属：父（KinPerson 28618）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_l6h4WvQVI4gxZU9Q2MLBLu
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 28615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28615&o=json
            external_identifier: CBDB:28615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Um72HYcp3p3KFjoRzv1aTv
        status: active
        display_name: 王沂
        merged_into_person_id: null
    - claim:
        id: c_lfFWW9xe0Cv4zlYPoW8KK_
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j2YV51vR8ErQb6U26N9WN1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G3pim0rrS3HMaYIwOajuEN
          claim_id: c_lfFWW9xe0Cv4zlYPoW8KK_
          source_id: s_5WsLTlDXb7mV3aSnLzfhS5
          stance: supports
          locator: CBDB 亲属：父（KinPerson 28618）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_5WsLTlDXb7mV3aSnLzfhS5
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 28622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28622&o=json
            external_identifier: CBDB:28622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2YV51vR8ErQb6U26N9WN1
        status: active
        display_name: 王澄
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_UbvfsfzoqIfsviYVKo5w1V
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HiGLATjQNb5AR3bD57hVc9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqUuYze0q-SekhFSreOrc3
          claim_id: c_UbvfsfzoqIfsviYVKo5w1V
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
          stance: supports
          locator: CBDB 双向互证（孫 王遷善 ⇄ 祖父 王宗某）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_HiGLATjQNb5AR3bD57hVc9
        status: active
        display_name: 王遷善
        merged_into_person_id: null
    - claim:
        id: c_78tZ8OVZXN2mCU1heyohnr
        subject_person_id: p_xZVFVfV8CQCzdHSD73eh6H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EgRz95qRGSQbLwKDLqNaqW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzSjoWRcN9widdi-hsb6sV
          claim_id: c_78tZ8OVZXN2mCU1heyohnr
          source_id: s_uUwq3i4nBW2ea9MsJ581Lw
          stance: supports
          locator: CBDB 双向互证（孫 王崇善 ⇄ 祖父 王宗某）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EgRz95qRGSQbLwKDLqNaqW
        status: active
        display_name: 王崇善
        merged_into_person_id: null
  other: []
---

# 王宗某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗某 | accepted |
| birth.date | 1257年 | accepted |
| death.date | 1323年 | accepted |
| bio.summary | 王宗某（1257年—1323年），元人物。籍贯真定，入仕徵辟，曾任縣主簿、行中書省掾、宣慰司令史。（中国历代人物传记资料库 CBDB 28618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ELTFwpJhBRCdcynL2AFhCN | 王振艱 | accepted |
| children | p_KR1vacK9Wk4VKtR9RaVDsq | 王洙 | accepted |
| children | p_Um72HYcp3p3KFjoRzv1aTv | 王沂 | accepted |
| children | p_j2YV51vR8ErQb6U26N9WN1 | 王澄 | accepted |
| descendants | p_HiGLATjQNb5AR3bD57hVc9 | 王遷善 | accepted |
| descendants | p_EgRz95qRGSQbLwKDLqNaqW | 王崇善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 28622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28622&o=json)
- [中国历代人物传记资料库：王沂（CBDB 28615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28615&o=json)
- [中国历代人物传记资料库：王洙（CBDB 28623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28623&o=json)
- [中国历代人物传记资料库：王宗某（CBDB 28618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28618&o=json)
