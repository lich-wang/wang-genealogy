---
schema: wang-person/v1
id: p_cZX36FsZfyp13UCG1A5dAD
status: active
merged_into: null
display_name: 王子建
cbdb_id: 191499
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c3WWJzLioAfQgz9B2XeHyK
        subject_person_id: p_cZX36FsZfyp13UCG1A5dAD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子建（卒于773年），唐人物。籍贯長洲，曾任長史。（中国历代人物传记资料库 CBDB 191499）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1w0V490H-9AHxd5NRcqlQc
          claim_id: c_c3WWJzLioAfQgz9B2XeHyK
          source_id: s_JKKv9PnZzJe5qAUqYma8EP
          stance: supports
          locator: CBDB:191499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JKKv9PnZzJe5qAUqYma8EP
            source_type: api_record
            title: 中国历代人物传记资料库：王子建（CBDB 191499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191499&o=json
            external_identifier: CBDB:191499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gJ8cWuGNqRTt5VyM8kCR1V
        subject_person_id: p_cZX36FsZfyp13UCG1A5dAD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 773年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0773-01-01
            latest: 0773-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fUcR1B6W9nUtinEwP99nMM
          claim_id: c_gJ8cWuGNqRTt5VyM8kCR1V
          source_id: s_JKKv9PnZzJe5qAUqYma8EP
          stance: supports
          locator: CBDB:191499
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 773
          source:
            id: s_JKKv9PnZzJe5qAUqYma8EP
            source_type: api_record
            title: 中国历代人物传记资料库：王子建（CBDB 191499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191499&o=json
            external_identifier: CBDB:191499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dGdhsSXo5bTFJ9J2u6A1EG
        subject_person_id: p_cZX36FsZfyp13UCG1A5dAD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子建
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7zzG8PcSDfHn17Xn6CCuqC
          claim_id: c_dGdhsSXo5bTFJ9J2u6A1EG
          source_id: s_JKKv9PnZzJe5qAUqYma8EP
          stance: supports
          locator: CBDB:191499
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 773
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QdD2b1-8E0d2li8YzDtyD5
        subject_person_id: p_8jb38Wu9u5AatYJn3UaMsM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cZX36FsZfyp13UCG1A5dAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GipEEFj7q30lCCWglr-JdO
          claim_id: c_QdD2b1-8E0d2li8YzDtyD5
          source_id: s_SyB5HGjSVhCMX3rywmiE46
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SyB5HGjSVhCMX3rywmiE46
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 175756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175756&o=json
            external_identifier: CBDB:175756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8jb38Wu9u5AatYJn3UaMsM
        status: active
        display_name: 王日新
        merged_into_person_id: null
  children:
    - claim:
        id: c_uJ3LtEEbTmsZi_CdPdDRxn
        subject_person_id: p_cZX36FsZfyp13UCG1A5dAD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wuk38nfNXd8MstdrtJSBPC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-Ldo-c6HxRdLszL_r8Yi4M
          claim_id: c_uJ3LtEEbTmsZi_CdPdDRxn
          source_id: s_bppn4ozNnWVXcWYqFkZ3HK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bppn4ozNnWVXcWYqFkZ3HK
            source_type: api_record
            title: 中国历代人物传记资料库：王德進（CBDB 145301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145301&o=json
            external_identifier: CBDB:145301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Wuk38nfNXd8MstdrtJSBPC
        status: active
        display_name: 王德進
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子建

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子建（卒于773年），唐人物。籍贯長洲，曾任長史。（中国历代人物传记资料库 CBDB 191499） | accepted |
| death.date | 773年 | accepted |
| name.primary | 王子建 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8jb38Wu9u5AatYJn3UaMsM | 王日新 | accepted |
| children | p_Wuk38nfNXd8MstdrtJSBPC | 王德進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德進（CBDB 145301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145301&o=json)
- [中国历代人物传记资料库：王日新（CBDB 175756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175756&o=json)
- [中国历代人物传记资料库：王子建（CBDB 191499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191499&o=json)
