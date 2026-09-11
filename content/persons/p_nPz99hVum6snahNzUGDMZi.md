---
schema: wang-person/v1
id: p_nPz99hVum6snahNzUGDMZi
status: active
merged_into: null
display_name: 曹氏
revision: 1
cbdb_id: 561406
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1F_K1DIjuMlRF9u6f_devd
        subject_person_id: p_nPz99hVum6snahNzUGDMZi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yyp0M4DtMrxfN8pdfTQ8tA
          claim_id: c_1F_K1DIjuMlRF9u6f_devd
          source_id: s_YqOMpIUlVNh5EsX97w0SHV
          stance: supports
          locator: CBDB:561406
          quotation: null
          interpretation_note: CBDB 明确记录的王有齡配偶
          source: &a1
            id: s_YqOMpIUlVNh5EsX97w0SHV
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王有齡妻)（CBDB 561406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561406&o=json
            external_identifier: CBDB:561406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_CbWc1a4JMD47312JiKwT0T
        subject_person_id: p_tNfmwoyANx9nezKhR7v9kd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nPz99hVum6snahNzUGDMZi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__wFFVCoHePhU7f7ayWXY73
          claim_id: c_CbWc1a4JMD47312JiKwT0T
          source_id: s_YqOMpIUlVNh5EsX97w0SHV
          stance: supports
          locator: 南陽府志，lgid=878855：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tNfmwoyANx9nezKhR7v9kd
        status: active
        display_name: 王有齡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 曹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_tNfmwoyANx9nezKhR7v9kd | 王有齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王有齡妻)（CBDB 561406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561406&o=json)
