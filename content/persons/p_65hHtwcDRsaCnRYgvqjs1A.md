---
schema: wang-person/v1
id: p_65hHtwcDRsaCnRYgvqjs1A
status: active
merged_into: null
display_name: 王元暕
cbdb_id: 190797
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5mseZAQLPbeLekZqUkyXzB
        subject_person_id: p_65hHtwcDRsaCnRYgvqjs1A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元暕（卒于710年），唐人物。籍贯太原，曾任比部員外郎。（中国历代人物传记资料库 CBDB 190797）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_31qWgIE-_qTbQoyXe4-EqS
          claim_id: c_5mseZAQLPbeLekZqUkyXzB
          source_id: s_r35UgH5yGzc7Jhbdqmg8cs
          stance: supports
          locator: CBDB:190797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r35UgH5yGzc7Jhbdqmg8cs
            source_type: api_record
            title: 中国历代人物传记资料库：王元暕（CBDB 190797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190797&o=json
            external_identifier: CBDB:190797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k5DrK9YNcaZpY57vT2xZQB
        subject_person_id: p_65hHtwcDRsaCnRYgvqjs1A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 710年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0710-01-01
            latest: 0710-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X2ERSkfFdL7oY1E2fyngKk
          claim_id: c_k5DrK9YNcaZpY57vT2xZQB
          source_id: s_r35UgH5yGzc7Jhbdqmg8cs
          stance: supports
          locator: CBDB:190797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 710
          source:
            id: s_r35UgH5yGzc7Jhbdqmg8cs
            source_type: api_record
            title: 中国历代人物传记资料库：王元暕（CBDB 190797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190797&o=json
            external_identifier: CBDB:190797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GFVqwJ9kCfaQRW2mVJ6E2m
        subject_person_id: p_65hHtwcDRsaCnRYgvqjs1A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元暕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Ewmw4gW1mzTG82vcKY57x
          claim_id: c_GFVqwJ9kCfaQRW2mVJ6E2m
          source_id: s_r35UgH5yGzc7Jhbdqmg8cs
          stance: supports
          locator: CBDB:190797
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 710
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_aP5kTOkRZijSf_vDUuS5-P
        subject_person_id: p_65hHtwcDRsaCnRYgvqjs1A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NA6uA34HWqF44rhfVg8JVc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRqjj9Y7jy6z1Ji7ZR50gE
          claim_id: c_aP5kTOkRZijSf_vDUuS5-P
          source_id: s_WJradA74bz57LnNM1dUs5j
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WJradA74bz57LnNM1dUs5j
            source_type: api_record
            title: 中国历代人物传记资料库：王景肅（CBDB 190796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190796&o=json
            external_identifier: CBDB:190796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.336Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NA6uA34HWqF44rhfVg8JVc
        status: active
        display_name: 王景肅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元暕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王元暕（卒于710年），唐人物。籍贯太原，曾任比部員外郎。（中国历代人物传记资料库 CBDB 190797） | accepted |
| death.date | 710年 | accepted |
| name.primary | 王元暕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NA6uA34HWqF44rhfVg8JVc | 王景肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景肅（CBDB 190796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190796&o=json)
- [中国历代人物传记资料库：王元暕（CBDB 190797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190797&o=json)
