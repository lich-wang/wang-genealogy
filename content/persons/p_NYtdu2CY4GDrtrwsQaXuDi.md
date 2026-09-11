---
schema: wang-person/v1
id: p_NYtdu2CY4GDrtrwsQaXuDi
status: active
merged_into: null
display_name: 王朝賢
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sYy9teJVYFjgRD61GF5dmM
        subject_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWLeGDLipNrFacgfYdZHQ2
          claim_id: c_sYy9teJVYFjgRD61GF5dmM
          source_id: s_MgFk5kGEpKT6YhH6EfxEJR
          stance: supports
          locator: CBDB:202778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202778）
          source: &a1
            id: s_MgFk5kGEpKT6YhH6EfxEJR
            source_type: api_record
            title: 中国历代人物传记资料库：王朝賢（CBDB 202778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202778&o=json
            external_identifier: CBDB:202778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BMZ58AzvMgskcBtE45BiVb
        subject_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uu7oeYFSJ3e9KD2uauJ8At
          claim_id: c_BMZ58AzvMgskcBtE45BiVb
          source_id: s_MgFk5kGEpKT6YhH6EfxEJR
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
        id: c_33L9b7UArHE2uwkrNcApJY
        subject_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
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
        - id: cs_tETGvt8w6YWmAiSetHi2QA
          claim_id: c_33L9b7UArHE2uwkrNcApJY
          source_id: s_MgFk5kGEpKT6YhH6EfxEJR
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
        id: c_X3aTDN4O7jQVf0xhOHfeGH
        subject_person_id: p_n2FPLD2HEJ5X29oj3Kwhfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M54up-HnrRZXA0AetrUh-i
          claim_id: c_X3aTDN4O7jQVf0xhOHfeGH
          source_id: s_bzcN1e1np3E4LGwcNt8ycP
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bzcN1e1np3E4LGwcNt8ycP
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 294142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294142&o=json
            external_identifier: CBDB:294142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.435Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_n2FPLD2HEJ5X29oj3Kwhfv
        status: active
        display_name: 王載
        merged_into_person_id: null
  children:
    - claim:
        id: c_IRl4RDkWujfsCjWTJlpt0B
        subject_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_X3T6w98BRJaGnRFLHzRJ7P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MfCdkaN_es0EUDUi6iK7Zr
          claim_id: c_IRl4RDkWujfsCjWTJlpt0B
          source_id: s_VnAiF9eJGM4H8gHKmvJn3t
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VnAiF9eJGM4H8gHKmvJn3t
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 294146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294146&o=json
            external_identifier: CBDB:294146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_X3T6w98BRJaGnRFLHzRJ7P
        status: active
        display_name: 王汝玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王朝賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝賢 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n2FPLD2HEJ5X29oj3Kwhfv | 王載 | accepted |
| children | p_X3T6w98BRJaGnRFLHzRJ7P | 王汝玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝賢（CBDB 202778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202778&o=json)
- [中国历代人物传记资料库：王汝玉（CBDB 294146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294146&o=json)
- [中国历代人物传记资料库：王載（CBDB 294142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294142&o=json)
