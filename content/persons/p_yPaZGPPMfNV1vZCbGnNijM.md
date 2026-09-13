---
schema: wang-person/v1
id: p_yPaZGPPMfNV1vZCbGnNijM
status: active
merged_into: null
display_name: 王囦金
cbdb_id: 384934
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eVTz5yJ9vpSaA3W9YmS5u6
        subject_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王囦金，宋人物。籍贯義烏，身份为未仕而卒，入仕進士，曾任從事郎、節度掌書記。（中国历代人物传记资料库 CBDB 384934）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qkOId5KJe8coezy1Awla_b
          claim_id: c_eVTz5yJ9vpSaA3W9YmS5u6
          source_id: s_5HxrGokxo8ad9FqotiWEom
          stance: supports
          locator: CBDB:384934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5HxrGokxo8ad9FqotiWEom
            source_type: api_record
            title: 中国历代人物传记资料库：王囦金（CBDB 384934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384934&o=json
            external_identifier: CBDB:384934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PSKZEuQDD9i6E3hSNAjFcM
        subject_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王囦金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8LHfPy4Y1B8mwRsVpPsfNn
          claim_id: c_PSKZEuQDD9i6E3hSNAjFcM
          source_id: s_5HxrGokxo8ad9FqotiWEom
          stance: supports
          locator: CBDB:384934
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_bFGtjHSYinqYeadw90wgeW
        subject_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XAia9hn1X1Mgc36T67v666
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_00a3ZdGQ2YoTgNtqAml0B6
          claim_id: c_bFGtjHSYinqYeadw90wgeW
          source_id: s_zBSrBeH33q2DPVysFse7Rz
          stance: supports
          locator: CBDB 双向互证（父 王囦金 ⇄ 子 王沂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_zBSrBeH33q2DPVysFse7Rz
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 386293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386293&o=json
            external_identifier: CBDB:386293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XAia9hn1X1Mgc36T67v666
        status: active
        display_name: 王沂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_N1kY7Qc4qAqL1rQj_C7rH3
        subject_person_id: p_yPaZGPPMfNV1vZCbGnNijM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TEeLBMW1EKrV1qx9KcZqCX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yexs1n3FqOccDpuFZ66OO0
          claim_id: c_N1kY7Qc4qAqL1rQj_C7rH3
          source_id: s_7gMHRZUxN8aQDgzsDol1hP
          stance: supports
          locator: CBDB 双向互证（妻子 黃氏(黃伯信女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7gMHRZUxN8aQDgzsDol1hP
            source_type: api_record
            title: 中国历代人物传记资料库：黃氏(黃伯信女)（CBDB 386278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386278&o=json
            external_identifier: CBDB:386278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TEeLBMW1EKrV1qx9KcZqCX
        status: active
        display_name: 黃氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王囦金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王囦金，宋人物。籍贯義烏，身份为未仕而卒，入仕進士，曾任從事郎、節度掌書記。（中国历代人物传记资料库 CBDB 384934） | accepted |
| name.primary | 王囦金 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XAia9hn1X1Mgc36T67v666 | 王沂 | accepted |
| spouses | p_TEeLBMW1EKrV1qx9KcZqCX | 黃氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：黃氏(黃伯信女)（CBDB 386278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386278&o=json)
- [中国历代人物传记资料库：王沂（CBDB 386293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386293&o=json)
- [中国历代人物传记资料库：王囦金（CBDB 384934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384934&o=json)
