---
schema: wang-person/v1
id: p_GTKmkrbi4mkMjkZmhTBBYy
status: active
merged_into: null
display_name: 王大猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tpLaxcktA9g1MExPJGxSYx
        subject_person_id: p_GTKmkrbi4mkMjkZmhTBBYy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o3uh9QpboDikPDbNpRnX6T
          claim_id: c_tpLaxcktA9g1MExPJGxSYx
          source_id: s_M29DivzRurCvHBDUVF8AD6
          stance: supports
          locator: CBDB:45876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45876）
          source: &a1
            id: s_M29DivzRurCvHBDUVF8AD6
            source_type: api_record
            title: 中国历代人物传记资料库：王大猷（CBDB 45876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45876&o=json
            external_identifier: CBDB:45876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.703Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZVVKCcjVrgNY94g2TA3R3P
        subject_person_id: p_GTKmkrbi4mkMjkZmhTBBYy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大猷，宋人物。籍贯鄞縣，入仕進士，曾任縣丞、敷文閣直學士。（中国历代人物传记资料库 CBDB 45876）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ntnh9FkPychYZiuIs_veT
          claim_id: c_ZVVKCcjVrgNY94g2TA3R3P
          source_id: s_M29DivzRurCvHBDUVF8AD6
          stance: supports
          locator: CBDB:45876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大猷 | accepted |
| bio.summary | 王大猷，宋人物。籍贯鄞縣，入仕進士，曾任縣丞、敷文閣直學士。（中国历代人物传记资料库 CBDB 45876） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大猷（CBDB 45876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45876&o=json)
