---
schema: wang-person/v1
id: p_Svj9W7N7znzaBMRC42scR5
status: active
merged_into: null
display_name: 王殿墀
cbdb_id: 526770
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iCUdQZxwZprsnX9Ery4ECR
        subject_person_id: p_Svj9W7N7znzaBMRC42scR5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿墀，清人物。中国历代人物传记资料库（CBDB）以人物编号 526770 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_mO5Ak-HTdUpaZ3-ZcU6vdo
          claim_id: c_iCUdQZxwZprsnX9Ery4ECR
          source_id: s_qH4qtwdMn6ij47w7TvQQ6b
          stance: supports
          locator: CBDB:526770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_qH4qtwdMn6ij47w7TvQQ6b
            source_type: api_record
            title: 中国历代人物传记资料库：王殿墀（CBDB 526770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526770&o=json
            external_identifier: CBDB:526770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_odhcoHHN37NJJFBT5S9EN4
        subject_person_id: p_Svj9W7N7znzaBMRC42scR5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿墀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_En6xa9zDkQMNLA7BYD4chm
          claim_id: c_odhcoHHN37NJJFBT5S9EN4
          source_id: s_qH4qtwdMn6ij47w7TvQQ6b
          stance: supports
          locator: CBDB:526770
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_qH4qtwdMn6ij47w7TvQQ6b
            source_type: api_record
            title: 中国历代人物传记资料库：王殿墀（CBDB 526770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526770&o=json
            external_identifier: CBDB:526770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bYJo7j3-rpQKDsNtASEKfF
        subject_person_id: p_uJa2Q2Q6Gn6hzqbbSgEjFk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Svj9W7N7znzaBMRC42scR5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lTFajJqQjVlUj_Fjw0mwe7
          claim_id: c_bYJo7j3-rpQKDsNtASEKfF
          source_id: s_eZLm2GpVp2dGuW6q3n4HwV
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12906：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eZLm2GpVp2dGuW6q3n4HwV
            source_type: api_record
            title: 中国历代人物传记资料库：王光昇（CBDB 69207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69207&o=json
            external_identifier: CBDB:69207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.153Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uJa2Q2Q6Gn6hzqbbSgEjFk
        status: active
        display_name: 王光昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王殿墀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王殿墀，清人物。中国历代人物传记资料库（CBDB）以人物编号 526770 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王殿墀 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uJa2Q2Q6Gn6hzqbbSgEjFk | 王光昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王殿墀（CBDB 526770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526770&o=json)
- [中国历代人物传记资料库：王光昇（CBDB 69207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69207&o=json)
