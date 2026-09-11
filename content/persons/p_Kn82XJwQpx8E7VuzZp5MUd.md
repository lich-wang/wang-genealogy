---
schema: wang-person/v1
id: p_Kn82XJwQpx8E7VuzZp5MUd
status: active
merged_into: null
display_name: 王景肅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2okeLtukEx5P68gcyfpdEv
        subject_person_id: p_Kn82XJwQpx8E7VuzZp5MUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_utdNAUed2SdBXeJutzVANE
          claim_id: c_2okeLtukEx5P68gcyfpdEv
          source_id: s_erQB7kF29k7uQYtSPGF4s9
          stance: supports
          locator: CBDB:191266
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191266）
          source: &a1
            id: s_erQB7kF29k7uQYtSPGF4s9
            source_type: api_record
            title: 中国历代人物传记资料库：王景肅（CBDB 191266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191266&o=json
            external_identifier: CBDB:191266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.354Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HSYBvsW61CAMHQNaEFoyUM
        subject_person_id: p_Kn82XJwQpx8E7VuzZp5MUd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJvDX9gSbpSnMRJT591EdQ
          claim_id: c_HSYBvsW61CAMHQNaEFoyUM
          source_id: s_erQB7kF29k7uQYtSPGF4s9
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
        id: c_mobhCK57opqc5sy559nxUL
        subject_person_id: p_Kn82XJwQpx8E7VuzZp5MUd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景肅（卒于648年），唐人物。籍贯長安，曾任州刺史。（中国历代人物传记资料库 CBDB 191266）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xt_XtlfQ3QDgW5UslXJnx0
          claim_id: c_mobhCK57opqc5sy559nxUL
          source_id: s_erQB7kF29k7uQYtSPGF4s9
          stance: supports
          locator: CBDB:191266
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DfO1ARC1T3BqryWWPOwCj-
        subject_person_id: p_Kn82XJwQpx8E7VuzZp5MUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gxDxcj6aBLi9ev8VPcTTdZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5l-S3JJcOHNCIvR7ERL8Hm
          claim_id: c_DfO1ARC1T3BqryWWPOwCj-
          source_id: s_wuQ1mFa4SsFgwVfVJodGXM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wuQ1mFa4SsFgwVfVJodGXM
            source_type: api_record
            title: 中国历代人物传记资料库：王威（CBDB 32777）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32777&o=json
            external_identifier: CBDB:32777
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gxDxcj6aBLi9ev8VPcTTdZ
        status: active
        display_name: 王威
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景肅 | accepted |
| death.date | 648年 | accepted |
| bio.summary | 王景肅（卒于648年），唐人物。籍贯長安，曾任州刺史。（中国历代人物传记资料库 CBDB 191266） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gxDxcj6aBLi9ev8VPcTTdZ | 王威 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景肅（CBDB 191266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191266&o=json)
- [中国历代人物传记资料库：王威（CBDB 32777）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32777&o=json)
