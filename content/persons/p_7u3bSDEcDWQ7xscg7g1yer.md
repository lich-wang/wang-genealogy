---
schema: wang-person/v1
id: p_7u3bSDEcDWQ7xscg7g1yer
status: active
merged_into: null
display_name: 王崇俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aGHWbXXraYTpAjgpjdGKZZ
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5BofuH8VFKZ8GjjnHgurjd
          claim_id: c_aGHWbXXraYTpAjgpjdGKZZ
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: CBDB:141300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141300）
          source: &a1
            id: s_NvuDtdsVXEChdgpchxcaLA
            source_type: api_record
            title: 中国历代人物传记资料库：王崇俊（CBDB 141300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json
            external_identifier: CBDB:141300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UFGGuAnCWMy59BS1NmjLrb
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 724年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZJWPbtrSWzFhUH8mp2LHRJ
          claim_id: c_UFGGuAnCWMy59BS1NmjLrb
          source_id: s_NvuDtdsVXEChdgpchxcaLA
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
        id: c_2FkwkLoZqGeuvq2UDyJZca
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L45VTUpZyFeMMBQz2SifTC
          claim_id: c_2FkwkLoZqGeuvq2UDyJZca
          source_id: s_NvuDtdsVXEChdgpchxcaLA
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
        id: c_c49FZdj6L3U1S3MsHck8zj
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXAAgD3KZgJCYHQYVvLpjD
          claim_id: c_c49FZdj6L3U1S3MsHck8zj
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王崇俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇俊 | accepted |
| birth.date | 724年 | accepted |
| death.date | 792年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇俊（CBDB 141300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json)
