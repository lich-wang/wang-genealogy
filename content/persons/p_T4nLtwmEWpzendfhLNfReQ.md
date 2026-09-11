---
schema: wang-person/v1
id: p_T4nLtwmEWpzendfhLNfReQ
status: active
merged_into: null
display_name: 王之佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pSv2381TgKt8rZqv6roXF3
        subject_person_id: p_T4nLtwmEWpzendfhLNfReQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LzhE1hubc6kirQ48i1dTZT
          claim_id: c_pSv2381TgKt8rZqv6roXF3
          source_id: s_Mg3XahcMDNczdvGmZvBL3X
          stance: supports
          locator: CBDB:574429
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574429）
          source: &a1
            id: s_Mg3XahcMDNczdvGmZvBL3X
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 574429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574429&o=json
            external_identifier: CBDB:574429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2B231ZjjuUsL9LubdJp1zk
        subject_person_id: p_T4nLtwmEWpzendfhLNfReQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之佐，明人物。籍贯蘄水，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574429）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZsvT8YazbLKL728fUrjMgR
          claim_id: c_2B231ZjjuUsL9LubdJp1zk
          source_id: s_Mg3XahcMDNczdvGmZvBL3X
          stance: supports
          locator: CBDB:574429
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

# 王之佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之佐 | accepted |
| bio.summary | 王之佐，明人物。籍贯蘄水，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 574429） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之佐（CBDB 574429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574429&o=json)
