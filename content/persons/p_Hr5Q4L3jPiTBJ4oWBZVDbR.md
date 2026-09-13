---
schema: wang-person/v1
id: p_Hr5Q4L3jPiTBJ4oWBZVDbR
status: active
merged_into: null
display_name: 王遏
cbdb_id: 151614
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tXmPKE6Mx596fMmaXPjBya
        subject_person_id: p_Hr5Q4L3jPiTBJ4oWBZVDbR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遏，唐人物。籍贯登州。（中国历代人物传记资料库 CBDB 151614）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pcV_5J7H9FJqvhfa3tV6cY
          claim_id: c_tXmPKE6Mx596fMmaXPjBya
          source_id: s_wVuESkF84wjHSZXEtPdhkE
          stance: supports
          locator: CBDB:151614
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wVuESkF84wjHSZXEtPdhkE
            source_type: api_record
            title: 中国历代人物传记资料库：王遏（CBDB 151614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151614&o=json
            external_identifier: CBDB:151614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1dCAHNm2gKyiF1FJSnwYU
        subject_person_id: p_Hr5Q4L3jPiTBJ4oWBZVDbR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aRKjHiogfiCJvv6ebqPGtT
          claim_id: c_G1dCAHNm2gKyiF1FJSnwYU
          source_id: s_wVuESkF84wjHSZXEtPdhkE
          stance: supports
          locator: CBDB:151614
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uKWfO2FRGJam-nbfmqQ0iD
        subject_person_id: p_Hr5Q4L3jPiTBJ4oWBZVDbR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DLG1zgaXP3p4Uge6Aa7xhu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pi6KpRJ4K9cMjocoUbP7JV
          claim_id: c_uKWfO2FRGJam-nbfmqQ0iD
          source_id: s_u5bE1VMMVfzsJ4j4D5A4fr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 134：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_u5bE1VMMVfzsJ4j4D5A4fr
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 140408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140408&o=json
            external_identifier: CBDB:140408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DLG1zgaXP3p4Uge6Aa7xhu
        status: active
        display_name: 王慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遏，唐人物。籍贯登州。（中国历代人物传记资料库 CBDB 151614） | accepted |
| name.primary | 王遏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DLG1zgaXP3p4Uge6Aa7xhu | 王慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遏（CBDB 151614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151614&o=json)
- [中国历代人物传记资料库：王慶（CBDB 140408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140408&o=json)
