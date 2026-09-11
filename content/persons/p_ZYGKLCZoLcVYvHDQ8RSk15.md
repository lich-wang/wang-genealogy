---
schema: wang-person/v1
id: p_ZYGKLCZoLcVYvHDQ8RSk15
status: active
merged_into: null
display_name: 王日章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eJQ1t8iCV6GWmN7JPcA2wQ
        subject_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WZ5KvBhBLrgxWp5hzaDAvx
          claim_id: c_eJQ1t8iCV6GWmN7JPcA2wQ
          source_id: s_xdNBM7bCyomSpDbXxpDMeH
          stance: supports
          locator: CBDB:71393
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71393）
          source: &a1
            id: s_xdNBM7bCyomSpDbXxpDMeH
            source_type: api_record
            title: 中国历代人物传记资料库：王日章（CBDB 71393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71393&o=json
            external_identifier: CBDB:71393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.634Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GHXVoR8tsMEuQB1Cv89F9w
        subject_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1795年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b8GjJg21BYo6gWvLLwvMHq
          claim_id: c_GHXVoR8tsMEuQB1Cv89F9w
          source_id: s_xdNBM7bCyomSpDbXxpDMeH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1Mhv4NwD2SevXDie5fx9jC
        subject_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9HQPrzu6FKJxB5hpPVMq7
          claim_id: c_1Mhv4NwD2SevXDie5fx9jC
          source_id: s_xdNBM7bCyomSpDbXxpDMeH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ckaPMhrg882MGCHKNz6KwH
        subject_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王日章（1795年—1836年），清人物。籍贯鄞縣，身份为家塾師、孝子/孝女，入仕學校: 生員(庠生)，曾任訓導。（中国历代人物传记资料库 CBDB 71393）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bA1HUifDTALsTSvYGQBOkH
          claim_id: c_ckaPMhrg882MGCHKNz6KwH
          source_id: s_xdNBM7bCyomSpDbXxpDMeH
          stance: supports
          locator: CBDB:71393
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1gc6sQN-sWv1LOf2G46oJs
        subject_person_id: p_UJKzqzDyQhTDBdoxDoSKdJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nKdbipvZf7A7-YrNvqKtFE
          claim_id: c_1gc6sQN-sWv1LOf2G46oJs
          source_id: s_wvX3v6n2yEp72sfEDv7MxA
          stance: supports
          locator: 鄞縣志，lgid=243594：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wvX3v6n2yEp72sfEDv7MxA
            source_type: api_record
            title: 中国历代人物传记资料库：王修敬（CBDB 693944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693944&o=json
            external_identifier: CBDB:693944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.512Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UJKzqzDyQhTDBdoxDoSKdJ
        status: active
        display_name: 王修敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NHeiIg9n79KaF71BApLAm3
        subject_person_id: p_Kt7gd5xwrQ59zC7PWajchu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZYGKLCZoLcVYvHDQ8RSk15
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RB5j5yhNIPmtMBd8HNLi3A
          claim_id: c_NHeiIg9n79KaF71BApLAm3
          source_id: s_tvxZ7xi6AAqQGuApbgT1GH
          stance: supports
          locator: 鄞縣志，lgid=243594：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tvxZ7xi6AAqQGuApbgT1GH
            source_type: api_record
            title: 中国历代人物传记资料库：王明傑（CBDB 693942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693942&o=json
            external_identifier: CBDB:693942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kt7gd5xwrQ59zC7PWajchu
        status: active
        display_name: 王明傑
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王日章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日章 | accepted |
| birth.date | 1795年 | accepted |
| death.date | 1836年 | accepted |
| bio.summary | 王日章（1795年—1836年），清人物。籍贯鄞縣，身份为家塾師、孝子/孝女，入仕學校: 生員(庠生)，曾任訓導。（中国历代人物传记资料库 CBDB 71393） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UJKzqzDyQhTDBdoxDoSKdJ | 王修敬 | accepted |
| ancestors | p_Kt7gd5xwrQ59zC7PWajchu | 王明傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明傑（CBDB 693942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693942&o=json)
- [中国历代人物传记资料库：王日章（CBDB 71393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71393&o=json)
- [中国历代人物传记资料库：王修敬（CBDB 693944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693944&o=json)
