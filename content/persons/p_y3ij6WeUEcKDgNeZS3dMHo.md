---
schema: wang-person/v1
id: p_y3ij6WeUEcKDgNeZS3dMHo
status: active
merged_into: null
display_name: 王祚
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_koBjx5HCTCFeMgCnNj7JfX
        subject_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pFrw8iwPoX67WtFq9nPZLu
          claim_id: c_koBjx5HCTCFeMgCnNj7JfX
          source_id: s_YeH6GrKQWXPrz84PSWV3j9
          stance: supports
          locator: CBDB:202593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202593）
          source: &a1
            id: s_YeH6GrKQWXPrz84PSWV3j9
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 202593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202593&o=json
            external_identifier: CBDB:202593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KBEChQRVk817ZM6TpAFSJM
        subject_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_psDC8wpQjgW7D9T5ZMtdGX
          claim_id: c_KBEChQRVk817ZM6TpAFSJM
          source_id: s_YeH6GrKQWXPrz84PSWV3j9
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
        id: c_duPou4q5kdccw55t8CFYMU
        subject_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚（生于1495年），明人物。嘉靖八年進士，籍贯保定右衛，入仕進士。（中国历代人物传记资料库 CBDB 202593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_njlgWpT3mbzqjoddE-_Jb8
          claim_id: c_duPou4q5kdccw55t8CFYMU
          source_id: s_YeH6GrKQWXPrz84PSWV3j9
          stance: supports
          locator: CBDB:202593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0QCUpiDZ4mRyQqJ06Ud37G
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_662fUoxo8kv8DCWVs8hMAr
          claim_id: c_0QCUpiDZ4mRyQqJ06Ud37G
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6KPe1cr3pLCqBLXj4NAHCu
            source_type: api_record
            title: 中国历代人物传记资料库：王守憲（CBDB 290443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json
            external_identifier: CBDB:290443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Je1o2mVdfZbZ5br4teNV7A
        status: active
        display_name: 王守憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FTpTeSGHBFxfza1lJskC2L
        subject_person_id: p_Cz2aDZZDbFXR8oBoBubJp3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eoag5TWD5vru_dlw9hoaD2
          claim_id: c_FTpTeSGHBFxfza1lJskC2L
          source_id: s_HQ4VTWF2CVyjvpHJWPPa2T
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百零二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HQ4VTWF2CVyjvpHJWPPa2T
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 290440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290440&o=json
            external_identifier: CBDB:290440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Cz2aDZZDbFXR8oBoBubJp3
        status: active
        display_name: 王海
        merged_into_person_id: null
    - claim:
        id: c_4On22WAvJOlkhEJe5sjpMQ
        subject_person_id: p_v6kHj8H4MhaeKnjb7Cdx3x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3t87xu0HxkQdBJarTlo1JT
          claim_id: c_4On22WAvJOlkhEJe5sjpMQ
          source_id: s_uAhzJo38kyHxdXaeVxuJ5X
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uAhzJo38kyHxdXaeVxuJ5X
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 290441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290441&o=json
            external_identifier: CBDB:290441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_v6kHj8H4MhaeKnjb7Cdx3x
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| birth.date | 1495年 | accepted |
| bio.summary | 王祚（生于1495年），明人物。嘉靖八年進士，籍贯保定右衛，入仕進士。（中国历代人物传记资料库 CBDB 202593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Je1o2mVdfZbZ5br4teNV7A | 王守憲 | accepted |
| ancestors | p_Cz2aDZZDbFXR8oBoBubJp3 | 王海 | accepted |
| ancestors | p_v6kHj8H4MhaeKnjb7Cdx3x | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王海（CBDB 290440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290440&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 290441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290441&o=json)
- [中国历代人物传记资料库：王守憲（CBDB 290443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json)
- [中国历代人物传记资料库：王祚（CBDB 202593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202593&o=json)
