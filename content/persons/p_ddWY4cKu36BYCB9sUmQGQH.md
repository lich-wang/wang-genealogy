---
schema: wang-person/v1
id: p_ddWY4cKu36BYCB9sUmQGQH
status: active
merged_into: null
display_name: 王勇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7dyqujuo3cE2bEi73VUZDD
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_spsVhANNfh8NJV1133Nhvf
          claim_id: c_7dyqujuo3cE2bEi73VUZDD
          source_id: s_6YBdzMUoq63hH1eUGM1PhC
          stance: supports
          locator: CBDB:311219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311219）
          source: &a1
            id: s_6YBdzMUoq63hH1eUGM1PhC
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 311219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311219&o=json
            external_identifier: CBDB:311219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u8S8YeWMko3T3WankbA9GE
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FPiFBdR3BZnang1dBTnqeD
          claim_id: c_u8S8YeWMko3T3WankbA9GE
          source_id: s_6YBdzMUoq63hH1eUGM1PhC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7tQr2LsNTWUWbcfP2N4Vw0
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJclJh0vQuGx5vNB6HsIBt
          claim_id: c_7tQr2LsNTWUWbcfP2N4Vw0
          source_id: s_6YBdzMUoq63hH1eUGM1PhC
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dBDSp35EhkaWHCV6D81q6n
        status: active
        display_name: 王大猷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_znfMa__4FhCGiQ0s2XTnwK
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WQnWovSFrYDkJc9QHdes5H
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GpksXVnH_TRLVaHyFsvfwC
          claim_id: c_znfMa__4FhCGiQ0s2XTnwK
          source_id: s_gOvKE5pPQU6BCvmROwC3Ps
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294156：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gOvKE5pPQU6BCvmROwC3Ps
            source_type: api_record
            title: 中国历代人物传记资料库：沈氏(王大猷母)（CBDB 311221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311221&o=json
            external_identifier: CBDB:311221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WQnWovSFrYDkJc9QHdes5H
        status: active
        display_name: 沈氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王勇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dBDSp35EhkaWHCV6D81q6n | 王大猷 | accepted |
| spouses | p_WQnWovSFrYDkJc9QHdes5H | 沈氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈氏(王大猷母)（CBDB 311221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311221&o=json)
- [中国历代人物传记资料库：王勇（CBDB 311219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311219&o=json)
