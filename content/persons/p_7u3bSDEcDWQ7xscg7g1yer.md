---
schema: wang-person/v1
id: p_7u3bSDEcDWQ7xscg7g1yer
status: active
merged_into: null
display_name: 王崇俊
revision: 2
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
          text: 王崇俊（724年—792年），唐人物。籍贯中部。（中国历代人物传记资料库 CBDB 141300）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_650SEn2S8idgC5458t6xNp
          claim_id: c_c49FZdj6L3U1S3MsHck8zj
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: CBDB:141300
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tLaNeBq1gT_OJA9CmzLUma
        subject_person_id: p_Eh6ZRpskLWUcQbvih8LjAK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VKw6v3r09euNgzRuGnB1oT
          claim_id: c_tLaNeBq1gT_OJA9CmzLUma
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Eh6ZRpskLWUcQbvih8LjAK
        status: active
        display_name: 王元貞
        merged_into_person_id: null
  children:
    - claim:
        id: c_LowXepcz1hGnvLW0pcj2IM
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnGY3KPPqt258erKQrzqTZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qGNpBlHGvgrkd1wh_IVIT4
          claim_id: c_LowXepcz1hGnvLW0pcj2IM
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EnGY3KPPqt258erKQrzqTZ
        status: active
        display_name: 王少珍
        merged_into_person_id: null
    - claim:
        id: c_3H0GMWQANqKzQExCIo2lXb
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DPm6Ve4vJDpinaKhhNYG9R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_doi2AuzdOk8X0yvvLXa2ph
          claim_id: c_3H0GMWQANqKzQExCIo2lXb
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DPm6Ve4vJDpinaKhhNYG9R
        status: active
        display_name: 王少華
        merged_into_person_id: null
    - claim:
        id: c_bWqOUj0Li9296svJkjZGWe
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A73S9uGGAkovw2GspRR371
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pUxjUovizv4amiOskVVA9P
          claim_id: c_bWqOUj0Li9296svJkjZGWe
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A73S9uGGAkovw2GspRR371
        status: active
        display_name: 王彥
        merged_into_person_id: null
    - claim:
        id: c_gSM8utnGUFlSKN9Ds1cxPB
        subject_person_id: p_7u3bSDEcDWQ7xscg7g1yer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rJjT8SEAAUkWGSz5YzGbND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNNc_ut8MWf9da9whrP0kV
          claim_id: c_gSM8utnGUFlSKN9Ds1cxPB
          source_id: s_NvuDtdsVXEChdgpchxcaLA
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 50：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rJjT8SEAAUkWGSz5YzGbND
        status: active
        display_name: 王良劍
        merged_into_person_id: null
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
| bio.summary | 王崇俊（724年—792年），唐人物。籍贯中部。（中国历代人物传记资料库 CBDB 141300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Eh6ZRpskLWUcQbvih8LjAK | 王元貞 | accepted |
| children | p_EnGY3KPPqt258erKQrzqTZ | 王少珍 | accepted |
| children | p_DPm6Ve4vJDpinaKhhNYG9R | 王少華 | accepted |
| children | p_A73S9uGGAkovw2GspRR371 | 王彥 | accepted |
| children | p_rJjT8SEAAUkWGSz5YzGbND | 王良劍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇俊（CBDB 141300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json)
