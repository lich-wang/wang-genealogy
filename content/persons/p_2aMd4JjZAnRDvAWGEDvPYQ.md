---
schema: wang-person/v1
id: p_2aMd4JjZAnRDvAWGEDvPYQ
status: active
merged_into: null
display_name: 王復
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_61JiWX63zzMPZTknDVgMJU
        subject_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GgUTnJ9LQZCi9Z2FfBEUGZ
          claim_id: c_61JiWX63zzMPZTknDVgMJU
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: CBDB:67669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67669）
          source: &a1
            id: s_YpAKSrU9qwMyHtJCQL4Hfc
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 67669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json
            external_identifier: CBDB:67669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_paFbAQpLJEgCXBF65jBfPu
        subject_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復，明人物。明清進士進士，籍贯慈溪，入仕進士，曾任道監察御史、行在行人司左司副。（中国历代人物传记资料库 CBDB 67669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IudTxG1VLm2zpIiSQe18hp
          claim_id: c_paFbAQpLJEgCXBF65jBfPu
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: CBDB:67669
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1WnX0JcFNk3hHxrN0p0Nzh
        subject_person_id: p_7ti6hEZ9GGw3TL96PZAiSk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsWbSCUX_INJsx45CITIFI
          claim_id: c_1WnX0JcFNk3hHxrN0p0Nzh
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7ti6hEZ9GGw3TL96PZAiSk
        status: active
        display_name: 王遜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_W1neF7u8xNrUefhU6Ow1nN
        subject_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xt6Q2EqBP13zZH2Sf4zwkz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ytZAmYiberCPDpb_AJVF9
          claim_id: c_W1neF7u8xNrUefhU6Ow1nN
          source_id: s_QB3vsaDxmTKtaCD5h0cSJp
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QB3vsaDxmTKtaCD5h0cSJp
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王復妻)（CBDB 322401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322401&o=json
            external_identifier: CBDB:322401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xt6Q2EqBP13zZH2Sf4zwkz
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_hJYSgEr_qXUrvIXtjj7JQ1
        subject_person_id: p_hHZ5eNrL27jeg6kvNsSboK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A_uT37o456zwQoC-LJUscT
          claim_id: c_hJYSgEr_qXUrvIXtjj7JQ1
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hHZ5eNrL27jeg6kvNsSboK
        status: active
        display_name: 王德興
        merged_into_person_id: null
    - claim:
        id: c_lBUHE-gYZwSxQHnaN2Kmj6
        subject_person_id: p_3hdu1ravStpuWm6LFsFbv7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2aMd4JjZAnRDvAWGEDvPYQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2WNSJg_rkwrXCeDJvW6JfV
          claim_id: c_lBUHE-gYZwSxQHnaN2Kmj6
          source_id: s_YpAKSrU9qwMyHtJCQL4Hfc
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第二甲第三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3hdu1ravStpuWm6LFsFbv7
        status: active
        display_name: 王叔瑜
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| bio.summary | 王復，明人物。明清進士進士，籍贯慈溪，入仕進士，曾任道監察御史、行在行人司左司副。（中国历代人物传记资料库 CBDB 67669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7ti6hEZ9GGw3TL96PZAiSk | 王遜 | accepted |
| spouses | p_Xt6Q2EqBP13zZH2Sf4zwkz | 張氏 | accepted |
| ancestors | p_hHZ5eNrL27jeg6kvNsSboK | 王德興 | accepted |
| ancestors | p_3hdu1ravStpuWm6LFsFbv7 | 王叔瑜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王復（CBDB 67669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67669&o=json)
- [中国历代人物传记资料库：張氏(王復妻)（CBDB 322401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322401&o=json)
