---
schema: wang-person/v1
id: p_CvzpEJfQqQbdZFgH5SKxcJ
status: active
merged_into: null
display_name: 王時雨
cbdb_id: 311207
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UX6VhiBDpn3FtGV9jNQzS5
        subject_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時雨，明人物。中国历代人物传记资料库（CBDB）以人物编号 311207 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_KCPiMk8N8rUroarFdeCd6E
          claim_id: c_UX6VhiBDpn3FtGV9jNQzS5
          source_id: s_LVPKP4SWAAxHvKRS6ZkzLj
          stance: supports
          locator: CBDB:311207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_LVPKP4SWAAxHvKRS6ZkzLj
            source_type: api_record
            title: 中国历代人物传记资料库：王時雨（CBDB 311207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311207&o=json
            external_identifier: CBDB:311207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Q5DxMum9Yy3kqh3q7gUZw
        subject_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時雨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8K1KakoeZ7qqMPam9a6KvW
          claim_id: c_9Q5DxMum9Yy3kqh3q7gUZw
          source_id: s_LVPKP4SWAAxHvKRS6ZkzLj
          stance: supports
          locator: CBDB:311207
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_LVPKP4SWAAxHvKRS6ZkzLj
            source_type: api_record
            title: 中国历代人物传记资料库：王時雨（CBDB 311207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311207&o=json
            external_identifier: CBDB:311207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1uE_tPyaLic2lSv2TO3vy0
        subject_person_id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sOsOO8ba5Wy-X506L0NnqE
          claim_id: c_1uE_tPyaLic2lSv2TO3vy0
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾祖、祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: &a1
            id: s_ZeEXZ4gqmGctbEfXb8vPv6
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 203867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json
            external_identifier: CBDB:203867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        status: active
        display_name: 王恢
        merged_into_person_id: null
  children:
    - claim:
        id: c_amIRleQceg_1YUg4gzNSMR
        subject_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxMzuSqxs59L9m8riCjY5R
          claim_id: c_amIRleQceg_1YUg4gzNSMR
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾祖、祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_18GnPkpUEcGNgbFCDg5gah
        status: active
        display_name: 王任用
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時雨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時雨，明人物。中国历代人物传记资料库（CBDB）以人物编号 311207 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王時雨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o3rUP2kQ1XZ8uF6hpE5TbV | 王恢 | accepted |
| children | p_18GnPkpUEcGNgbFCDg5gah | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任用（CBDB 203867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json)
- [中国历代人物传记资料库：王時雨（CBDB 311207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311207&o=json)
