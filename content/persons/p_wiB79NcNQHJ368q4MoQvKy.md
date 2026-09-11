---
schema: wang-person/v1
id: p_wiB79NcNQHJ368q4MoQvKy
status: active
merged_into: null
display_name: 王曾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hQ3pv2bVFPCZ1Dakyi9nZg
        subject_person_id: p_wiB79NcNQHJ368q4MoQvKy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BoPSNWGQtqHjSpu8NAZP4v
          claim_id: c_hQ3pv2bVFPCZ1Dakyi9nZg
          source_id: s_iHfTfZ4pxCK2FEZ9yzHxbq
          stance: supports
          locator: CBDB:158214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158214）
          source: &a1
            id: s_iHfTfZ4pxCK2FEZ9yzHxbq
            source_type: api_record
            title: 中国历代人物传记资料库：王曾（CBDB 158214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158214&o=json
            external_identifier: CBDB:158214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8LNNT7ahQC1YHkdMZqwzxs
        subject_person_id: p_wiB79NcNQHJ368q4MoQvKy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾，唐人物。籍贯揚子，曾任殿中侍御史。（中国历代人物传记资料库 CBDB 158214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FzTJvr4m4pO3ue-BxpKXTg
          claim_id: c_8LNNT7ahQC1YHkdMZqwzxs
          source_id: s_iHfTfZ4pxCK2FEZ9yzHxbq
          stance: supports
          locator: CBDB:158214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3HhNXuupHKLXJNVqcenttc
        subject_person_id: p_8g8Qs1D562BbS3RLayRcPg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wiB79NcNQHJ368q4MoQvKy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tQKp1dsqgXg6Oot92C0kld
          claim_id: c_3HhNXuupHKLXJNVqcenttc
          source_id: s_MvF4DJEz3XVjUCjZnuHH2E
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MvF4DJEz3XVjUCjZnuHH2E
            source_type: api_record
            title: 中国历代人物传记资料库：王象（CBDB 158213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158213&o=json
            external_identifier: CBDB:158213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8g8Qs1D562BbS3RLayRcPg
        status: active
        display_name: 王象
        merged_into_person_id: null
  children:
    - claim:
        id: c_-QbgvotqfXEkMtWvQ99WMx
        subject_person_id: p_wiB79NcNQHJ368q4MoQvKy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CJanQ26LPweM6g5VScYwJ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxBAEafd8euBgGs_WIdouD
          claim_id: c_-QbgvotqfXEkMtWvQ99WMx
          source_id: s_oFkhdhAiDC8VqDwBKqZ1QB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oFkhdhAiDC8VqDwBKqZ1QB
            source_type: api_record
            title: 中国历代人物传记资料库：王諸（CBDB 158215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158215&o=json
            external_identifier: CBDB:158215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_CJanQ26LPweM6g5VScYwJ4
        status: active
        display_name: 王諸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾 | accepted |
| bio.summary | 王曾，唐人物。籍贯揚子，曾任殿中侍御史。（中国历代人物传记资料库 CBDB 158214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8g8Qs1D562BbS3RLayRcPg | 王象 | accepted |
| children | p_CJanQ26LPweM6g5VScYwJ4 | 王諸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曾（CBDB 158214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158214&o=json)
- [中国历代人物传记资料库：王象（CBDB 158213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158213&o=json)
- [中国历代人物传记资料库：王諸（CBDB 158215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158215&o=json)
