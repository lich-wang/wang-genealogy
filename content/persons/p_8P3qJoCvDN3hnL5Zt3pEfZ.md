---
schema: wang-person/v1
id: p_8P3qJoCvDN3hnL5Zt3pEfZ
status: active
merged_into: null
display_name: 王大娘
cbdb_id: 147626
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y1NMo384EjmTQmyNQLMuuV
        subject_person_id: p_8P3qJoCvDN3hnL5Zt3pEfZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大娘，唐人物。中国历代人物传记资料库（CBDB）以人物编号 147626 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_P8oTwQkC7UBm-v8X8thMVD
          claim_id: c_Y1NMo384EjmTQmyNQLMuuV
          source_id: s_odUzCPMSCarRY8WvDgywip
          stance: supports
          locator: CBDB:147626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_odUzCPMSCarRY8WvDgywip
            source_type: api_record
            title: 中国历代人物传记资料库：王大娘（CBDB 147626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147626&o=json
            external_identifier: CBDB:147626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aJAb817Ka5eR8T5h1mLDQk
        subject_person_id: p_8P3qJoCvDN3hnL5Zt3pEfZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_68psQx5yNYYbjErMBLQGD9
          claim_id: c_aJAb817Ka5eR8T5h1mLDQk
          source_id: s_odUzCPMSCarRY8WvDgywip
          stance: supports
          locator: CBDB:147626
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_odUzCPMSCarRY8WvDgywip
            source_type: api_record
            title: 中国历代人物传记资料库：王大娘（CBDB 147626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147626&o=json
            external_identifier: CBDB:147626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-SSvXLZifrRdi40k2aIp7-
        subject_person_id: p_E6npEtnMZpEDx79AVK39VM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8P3qJoCvDN3hnL5Zt3pEfZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydOodB1tL_8lKN8VcGdEv5
          claim_id: c_-SSvXLZifrRdi40k2aIp7-
          source_id: s_odUzCPMSCarRY8WvDgywip
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 138：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E6npEtnMZpEDx79AVK39VM
        status: active
        display_name: 王力士
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王大娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王大娘，唐人物。中国历代人物传记资料库（CBDB）以人物编号 147626 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王大娘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E6npEtnMZpEDx79AVK39VM | 王力士 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大娘（CBDB 147626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147626&o=json)
