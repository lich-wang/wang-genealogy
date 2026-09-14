---
schema: wang-person/v1
id: p_NYtdu2CY4GDrtrwsQaXuDi
status: active
merged_into: null
display_name: 王朝賢
revision: 6
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
          text: 王朝賢（生于1505年），明人物。明清進士進士，籍贯太康，入仕進士，曾任副使、太僕寺卿、知府。（中国历代人物传记资料库 CBDB 202778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gEiMCS413yClYN-F6TiMPh
          claim_id: c_33L9b7UArHE2uwkrNcApJY
          source_id: s_MgFk5kGEpKT6YhH6EfxEJR
          stance: supports
          locator: CBDB:202778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  ancestors:
    - claim:
        id: c_Zz6kkWm3VADj-ERRK58R7x
        subject_person_id: p_YB8Sg5NvAJJ98XyCt8tJ7k
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9MSpGaK3ZWzFMgSHj18CS
          claim_id: c_Zz6kkWm3VADj-ERRK58R7x
          source_id: s_AbYggFYY1wiC6nymuAzCgn
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AbYggFYY1wiC6nymuAzCgn
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 294139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294139&o=json
            external_identifier: CBDB:294139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YB8Sg5NvAJJ98XyCt8tJ7k
        status: active
        display_name: 王簪
        merged_into_person_id: null
    - claim:
        id: c_SDyfHy4I9X9HnOcJMroBi3
        subject_person_id: p_opa5YQitJBDvTXt7fr8KDm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6wLXvOddDHzU3QMoXorFnN
          claim_id: c_SDyfHy4I9X9HnOcJMroBi3
          source_id: s_mv67k5J4NUQgcXWu77MtJu
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mv67k5J4NUQgcXWu77MtJu
            source_type: api_record
            title: 中国历代人物传记资料库：王焄（CBDB 294140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294140&o=json
            external_identifier: CBDB:294140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_opa5YQitJBDvTXt7fr8KDm
        status: active
        display_name: 王焄
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_aadybSz0PFHJQlXZPqHxV0
        subject_person_id: p_CXJD2x5NgucYYDoLj39JFo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NYtdu2CY4GDrtrwsQaXuDi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XoocvqpfKCbxQNNOpFRxyb
          claim_id: c_aadybSz0PFHJQlXZPqHxV0
          source_id: s_T0myBtdBOHIXpYjOJqLvUE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202778 王朝賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T0myBtdBOHIXpYjOJqLvUE
            source_type: api_record
            title: 中国历代人物传记资料库：王朝元（CBDB 294145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json
            external_identifier: CBDB:294145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CXJD2x5NgucYYDoLj39JFo
        status: active
        display_name: 王朝元
        merged_into_person_id: null
---

# 王朝賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝賢 | accepted |
| birth.date | 1505年 | accepted |
| bio.summary | 王朝賢（生于1505年），明人物。明清進士進士，籍贯太康，入仕進士，曾任副使、太僕寺卿、知府。（中国历代人物传记资料库 CBDB 202778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n2FPLD2HEJ5X29oj3Kwhfv | 王載 | accepted |
| children | p_X3T6w98BRJaGnRFLHzRJ7P | 王汝玉 | accepted |
| ancestors | p_YB8Sg5NvAJJ98XyCt8tJ7k | 王簪 | accepted |
| ancestors | p_opa5YQitJBDvTXt7fr8KDm | 王焄 | accepted |
| other | p_CXJD2x5NgucYYDoLj39JFo | 王朝元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝賢（CBDB 202778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202778&o=json)
- [中国历代人物传记资料库：王朝元（CBDB 294145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294145&o=json)
- [中国历代人物传记资料库：王汝玉（CBDB 294146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294146&o=json)
- [中国历代人物传记资料库：王焄（CBDB 294140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294140&o=json)
- [中国历代人物传记资料库：王載（CBDB 294142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294142&o=json)
- [中国历代人物传记资料库：王簪（CBDB 294139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294139&o=json)
