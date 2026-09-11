---
schema: wang-person/v1
id: p_xh97AA3qNTMYDkd8eSEMA4
status: active
merged_into: null
display_name: 王符電
cbdb_id: 526812
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xBzGDx8vdAaghLbDW8sGEj
        subject_person_id: p_xh97AA3qNTMYDkd8eSEMA4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符電，清人物。中国历代人物传记资料库（CBDB）以人物编号 526812 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rJprftojEMb1mwmuuTpgX0
          claim_id: c_xBzGDx8vdAaghLbDW8sGEj
          source_id: s_ozaNXymkm5VZB8NQMvzAiQ
          stance: supports
          locator: CBDB:526812
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ozaNXymkm5VZB8NQMvzAiQ
            source_type: api_record
            title: 中国历代人物传记资料库：王符電（CBDB 526812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526812&o=json
            external_identifier: CBDB:526812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v5jUATxV9ycKrNXkPuvSvb
        subject_person_id: p_xh97AA3qNTMYDkd8eSEMA4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符電
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5Qr53ptUnFZL2bDYikxXQt
          claim_id: c_v5jUATxV9ycKrNXkPuvSvb
          source_id: s_ozaNXymkm5VZB8NQMvzAiQ
          stance: supports
          locator: CBDB:526812
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_ozaNXymkm5VZB8NQMvzAiQ
            source_type: api_record
            title: 中国历代人物传记资料库：王符電（CBDB 526812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526812&o=json
            external_identifier: CBDB:526812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_MMGfLA7OykCTmnbhUSaQdV
        subject_person_id: p_V9Mdqt7Q4vUXMLyaLoUhgr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xh97AA3qNTMYDkd8eSEMA4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wd90mUfqE6A3_k8PU0bbVH
          claim_id: c_MMGfLA7OykCTmnbhUSaQdV
          source_id: s_ozaNXymkm5VZB8NQMvzAiQ
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12977：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V9Mdqt7Q4vUXMLyaLoUhgr
        status: active
        display_name: 王命時
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王符電

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王符電，清人物。中国历代人物传记资料库（CBDB）以人物编号 526812 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王符電 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_V9Mdqt7Q4vUXMLyaLoUhgr | 王命時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王符電（CBDB 526812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526812&o=json)
