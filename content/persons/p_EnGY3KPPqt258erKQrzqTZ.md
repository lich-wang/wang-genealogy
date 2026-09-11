---
schema: wang-person/v1
id: p_EnGY3KPPqt258erKQrzqTZ
status: active
merged_into: null
display_name: 王少珍
cbdb_id: 155635
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9AorEiJRGipb75CcKyFRWL
        subject_person_id: p_EnGY3KPPqt258erKQrzqTZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少珍，唐人物。中国历代人物传记资料库（CBDB）以人物编号 155635 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_QklwXKBCp1l5kPyyUda40a
          claim_id: c_9AorEiJRGipb75CcKyFRWL
          source_id: s_XWcRDNQ8JKRt6gNUWqgV2A
          stance: supports
          locator: CBDB:155635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_XWcRDNQ8JKRt6gNUWqgV2A
            source_type: api_record
            title: 中国历代人物传记资料库：王少珍（CBDB 155635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155635&o=json
            external_identifier: CBDB:155635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4or11ggHnZav5X9Zr1VnS7
        subject_person_id: p_EnGY3KPPqt258erKQrzqTZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王少珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_K1Y4Wa6Cb9nscVxV77bX3r
          claim_id: c_4or11ggHnZav5X9Zr1VnS7
          source_id: s_XWcRDNQ8JKRt6gNUWqgV2A
          stance: supports
          locator: CBDB:155635
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_XWcRDNQ8JKRt6gNUWqgV2A
            source_type: api_record
            title: 中国历代人物传记资料库：王少珍（CBDB 155635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155635&o=json
            external_identifier: CBDB:155635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_7u3bSDEcDWQ7xscg7g1yer
        status: active
        display_name: 王崇俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王少珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王少珍，唐人物。中国历代人物传记资料库（CBDB）以人物编号 155635 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王少珍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7u3bSDEcDWQ7xscg7g1yer | 王崇俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇俊（CBDB 141300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141300&o=json)
- [中国历代人物传记资料库：王少珍（CBDB 155635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155635&o=json)
