---
schema: wang-person/v1
id: p_ri2gaLdtCgSiuLfw1gnKUy
status: active
merged_into: null
display_name: 王同會
cbdb_id: 327390
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KK25Wk84ZS9dNxE9a52SCt
        subject_person_id: p_ri2gaLdtCgSiuLfw1gnKUy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同會，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327390）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jBpKwGFWkaOP_g9h5ZfsTT
          claim_id: c_KK25Wk84ZS9dNxE9a52SCt
          source_id: s_xVHDyiVQDzgGKBxrJro2vW
          stance: supports
          locator: CBDB:327390
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xVHDyiVQDzgGKBxrJro2vW
            source_type: api_record
            title: 中国历代人物传记资料库：王同會（CBDB 327390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json
            external_identifier: CBDB:327390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6kvqXhi7ekANmK5KAk7Sp4
        subject_person_id: p_ri2gaLdtCgSiuLfw1gnKUy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CHX1LhbhpV1jyzGE4KHPvn
          claim_id: c_6kvqXhi7ekANmK5KAk7Sp4
          source_id: s_xVHDyiVQDzgGKBxrJro2vW
          stance: supports
          locator: CBDB:327390
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iFbNurueiS5MBs_i3p3MdB
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ri2gaLdtCgSiuLfw1gnKUy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RIhUDALYD7mt-9KomiXB-I
          claim_id: c_iFbNurueiS5MBs_i3p3MdB
          source_id: s_JtqU20obPD5Tz9RsF_MTTn
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同會 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同會 之父／母。
          source:
            id: s_JtqU20obPD5Tz9RsF_MTTn
            source_type: api_record
            title: 中国历代人物传记资料库：王同會（CBDB 327390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json
            external_identifier: CBDB:327390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2Zw5HgNNKQfknjQ8rX9z5
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HPHUBQ-ve71y3vfwlc6lnN
        subject_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ri2gaLdtCgSiuLfw1gnKUy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_239Nsbo0VOJtqyFgkVdblR
          claim_id: c_HPHUBQ-ve71y3vfwlc6lnN
          source_id: s_JtqU20obPD5Tz9RsF_MTTn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JtqU20obPD5Tz9RsF_MTTn
            source_type: api_record
            title: 中国历代人物传记资料库：王同會（CBDB 327390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json
            external_identifier: CBDB:327390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
---

# 王同會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同會，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327390） | accepted |
| name.primary | 王同會 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A2Zw5HgNNKQfknjQ8rX9z5 | 王廷槐 | accepted |
| other | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同會（CBDB 327390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json)
