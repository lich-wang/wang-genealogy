---
schema: wang-person/v1
id: p_LuGtcLnNAnJs1yiVnMjgcK
status: active
merged_into: null
display_name: 王汝安
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BwtP8B3Z9Z6H6cviuapCF
        subject_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1u6L3rtbbhcGFALasELbuj
          claim_id: c_7BwtP8B3Z9Z6H6cviuapCF
          source_id: s_XgePHmGswDc5kjJ7GRtoWf
          stance: supports
          locator: CBDB:204050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204050）
          source: &a1
            id: s_XgePHmGswDc5kjJ7GRtoWf
            source_type: api_record
            title: 中国历代人物传记资料库：王汝安（CBDB 204050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204050&o=json
            external_identifier: CBDB:204050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fq3n5fos7cdbKbVoA4mh4J
        subject_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1510年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4F8wgd7e9Ui285G3CmEFVr
          claim_id: c_Fq3n5fos7cdbKbVoA4mh4J
          source_id: s_XgePHmGswDc5kjJ7GRtoWf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dw75tCY86jyfHA5gdmis3t
        subject_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
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
        - id: cs_2Yk2WjVLmsqi2KtQJ5oihr
          claim_id: c_Dw75tCY86jyfHA5gdmis3t
          source_id: s_XgePHmGswDc5kjJ7GRtoWf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_eqKgJ32HumT_DsNLBhPQQ-
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78GMZISwmpjxC39LEL2jWt
          claim_id: c_eqKgJ32HumT_DsNLBhPQQ-
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_93CadBC6FxAXmjJx1iJvy8
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 313768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313768&o=json
            external_identifier: CBDB:313768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jr1uT74hLZawrDdoEK3XZV
        status: active
        display_name: 王舉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ahp7v8jmPQgXmnFyLsdsiD
        subject_person_id: p_ByMgcAXTLuz3QmR38Nedsh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hz-_nS1Q52jR0jgmnVhESW
          claim_id: c_ahp7v8jmPQgXmnFyLsdsiD
          source_id: s_ZxAqBDE5cdU8FHmPknMZMd
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百零九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZxAqBDE5cdU8FHmPknMZMd
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 313766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313766&o=json
            external_identifier: CBDB:313766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ByMgcAXTLuz3QmR38Nedsh
        status: active
        display_name: 王明
        merged_into_person_id: null
    - claim:
        id: c_vjss0vvcvEgKdEsRAcE0ea
        subject_person_id: p_zctMD6CmbrwS6AmqDxisrw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QAXC91JTMKMJAE1OhDDa67
          claim_id: c_vjss0vvcvEgKdEsRAcE0ea
          source_id: s_HNhHqog1DJNtvDkmL2kARD
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百零九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HNhHqog1DJNtvDkmL2kARD
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 313767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313767&o=json
            external_identifier: CBDB:313767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zctMD6CmbrwS6AmqDxisrw
        status: active
        display_name: 王倫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝安 | accepted |
| birth.date | 1510年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jr1uT74hLZawrDdoEK3XZV | 王舉 | accepted |
| ancestors | p_ByMgcAXTLuz3QmR38Nedsh | 王明 | accepted |
| ancestors | p_zctMD6CmbrwS6AmqDxisrw | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 313768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313768&o=json)
- [中国历代人物传记资料库：王倫（CBDB 313767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313767&o=json)
- [中国历代人物传记资料库：王明（CBDB 313766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313766&o=json)
- [中国历代人物传记资料库：王汝安（CBDB 204050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204050&o=json)
