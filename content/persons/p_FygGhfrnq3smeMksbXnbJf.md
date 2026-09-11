---
schema: wang-person/v1
id: p_FygGhfrnq3smeMksbXnbJf
status: active
merged_into: null
display_name: 王雍熙
cbdb_id: 227290
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPn4RymhpkiTPmFVhm5AzW
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍熙，明人物。中国历代人物传记资料库（CBDB）以人物编号 227290 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zKEaq9S7MvjWmj614TLiAZ
          claim_id: c_FPn4RymhpkiTPmFVhm5AzW
          source_id: s_LMpqUV3rwN8evhwmD2cqrD
          stance: supports
          locator: CBDB:227290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_LMpqUV3rwN8evhwmD2cqrD
            source_type: api_record
            title: 中国历代人物传记资料库：王雍熙（CBDB 227290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227290&o=json
            external_identifier: CBDB:227290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ADKZno9CJx6BJu6mMTQv4y
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mUdeuEm4Xk8YPK4x16LunV
          claim_id: c_ADKZno9CJx6BJu6mMTQv4y
          source_id: s_LMpqUV3rwN8evhwmD2cqrD
          stance: supports
          locator: CBDB:227290
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_LMpqUV3rwN8evhwmD2cqrD
            source_type: api_record
            title: 中国历代人物传记资料库：王雍熙（CBDB 227290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227290&o=json
            external_identifier: CBDB:227290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fRs7tYqEGdbQfJ66r1GgV9
        subject_person_id: p_FygGhfrnq3smeMksbXnbJf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4UbRK7w6DiK7iFYWsav6v1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ce5yaK-XTI4BjRA89ZFsFm
          claim_id: c_fRs7tYqEGdbQfJ66r1GgV9
          source_id: s_avnRdC5KtG8zzfeDZxHPY8
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_avnRdC5KtG8zzfeDZxHPY8
            source_type: api_record
            title: 中国历代人物传记资料库：王都（CBDB 207078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json
            external_identifier: CBDB:207078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4UbRK7w6DiK7iFYWsav6v1
        status: active
        display_name: 王都
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雍熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雍熙，明人物。中国历代人物传记资料库（CBDB）以人物编号 227290 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王雍熙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4UbRK7w6DiK7iFYWsav6v1 | 王都 | accepted |

## 外部来源

- [中国历代人物传记资料库：王都（CBDB 207078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207078&o=json)
- [中国历代人物传记资料库：王雍熙（CBDB 227290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227290&o=json)
