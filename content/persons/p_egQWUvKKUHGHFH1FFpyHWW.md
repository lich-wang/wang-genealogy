---
schema: wang-person/v1
id: p_egQWUvKKUHGHFH1FFpyHWW
status: active
merged_into: null
display_name: 王祚延
cbdb_id: 233975
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QE6qqpQYfF7VMYtPKF57f6
        subject_person_id: p_egQWUvKKUHGHFH1FFpyHWW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚延，明人物。中国历代人物传记资料库（CBDB）以人物编号 233975 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_X6IH1SuVtq-p26Z_T0oQ7Q
          claim_id: c_QE6qqpQYfF7VMYtPKF57f6
          source_id: s_V5AsQCX7y4VPPoYDQsMfz3
          stance: supports
          locator: CBDB:233975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V5AsQCX7y4VPPoYDQsMfz3
            source_type: api_record
            title: 中国历代人物传记资料库：王祚延（CBDB 233975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233975&o=json
            external_identifier: CBDB:233975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7ARfJFWttKSy6A63psyQg
        subject_person_id: p_egQWUvKKUHGHFH1FFpyHWW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚延
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vivwvDn2MFAwsFyCDJ29A8
          claim_id: c_Z7ARfJFWttKSy6A63psyQg
          source_id: s_V5AsQCX7y4VPPoYDQsMfz3
          stance: supports
          locator: CBDB:233975
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_V5AsQCX7y4VPPoYDQsMfz3
            source_type: api_record
            title: 中国历代人物传记资料库：王祚延（CBDB 233975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233975&o=json
            external_identifier: CBDB:233975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IUJ-0y-tg9usnzXIsVKV_d
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_egQWUvKKUHGHFH1FFpyHWW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JZSG94r-RKLDfbY2L_HegE
          claim_id: c_IUJ-0y-tg9usnzXIsVKV_d
          source_id: s_V5AsQCX7y4VPPoYDQsMfz3
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vV52H1GLe4mb587k9pj5Z2
        status: active
        display_name: 王聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祚延

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祚延，明人物。中国历代人物传记资料库（CBDB）以人物编号 233975 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王祚延 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vV52H1GLe4mb587k9pj5Z2 | 王聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚延（CBDB 233975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233975&o=json)
