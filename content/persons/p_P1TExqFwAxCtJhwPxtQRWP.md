---
schema: wang-person/v1
id: p_P1TExqFwAxCtJhwPxtQRWP
status: active
merged_into: null
display_name: 王大唐
cbdb_id: 167288
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u3q6tNapLWEk1f2X8H58fA
        subject_person_id: p_P1TExqFwAxCtJhwPxtQRWP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大唐，唐人物。中国历代人物传记资料库（CBDB）以人物编号 167288 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_cOTV968RLQ2qhLieXPAJnO
          claim_id: c_u3q6tNapLWEk1f2X8H58fA
          source_id: s_a5Q95juKiD74Hpqv6hiwjG
          stance: supports
          locator: CBDB:167288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_a5Q95juKiD74Hpqv6hiwjG
            source_type: api_record
            title: 中国历代人物传记资料库：王大唐（CBDB 167288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167288&o=json
            external_identifier: CBDB:167288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dghSfP52Dmb2wcvJex2G8Q
        subject_person_id: p_P1TExqFwAxCtJhwPxtQRWP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大唐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GTHDWyGHcCGb6bRM6xi2ZV
          claim_id: c_dghSfP52Dmb2wcvJex2G8Q
          source_id: s_a5Q95juKiD74Hpqv6hiwjG
          stance: supports
          locator: CBDB:167288
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_a5Q95juKiD74Hpqv6hiwjG
            source_type: api_record
            title: 中国历代人物传记资料库：王大唐（CBDB 167288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167288&o=json
            external_identifier: CBDB:167288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sNsKK1JpVGRS1AmkOTHafB
        subject_person_id: p_P1TExqFwAxCtJhwPxtQRWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkuBep2mwWaKEfbgHSG4N1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTtJ4aiVw-dCwLgL15Y92K
          claim_id: c_sNsKK1JpVGRS1AmkOTHafB
          source_id: s_j2z8eeWbHkpsU4ip4mEKhQ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong23：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j2z8eeWbHkpsU4ip4mEKhQ
            source_type: api_record
            title: 中国历代人物传记资料库：王十六娘（CBDB 143464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143464&o=json
            external_identifier: CBDB:143464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QkuBep2mwWaKEfbgHSG4N1
        status: active
        display_name: 王十六娘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大唐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大唐，唐人物。中国历代人物传记资料库（CBDB）以人物编号 167288 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王大唐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QkuBep2mwWaKEfbgHSG4N1 | 王十六娘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大唐（CBDB 167288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167288&o=json)
- [中国历代人物传记资料库：王十六娘（CBDB 143464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143464&o=json)
