---
schema: wang-person/v1
id: p_BM6wMNHn5bHEHDoEeZirWe
status: active
merged_into: null
display_name: 王恭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VzQJVgADnaZMXym8sFBx6t
        subject_person_id: p_BM6wMNHn5bHEHDoEeZirWe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z5s3CWeF8TNSmEYr8qEfWD
          claim_id: c_VzQJVgADnaZMXym8sFBx6t
          source_id: s_3t7HWn5aVCYFtPceGKRQDm
          stance: supports
          locator: CBDB:336279
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336279）
          source: &a1
            id: s_3t7HWn5aVCYFtPceGKRQDm
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 336279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336279&o=json
            external_identifier: CBDB:336279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.480Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_88SLabTrhW4v6gsUPtDUf9
        subject_person_id: p_BM6wMNHn5bHEHDoEeZirWe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336279）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6tcZJukkJLtTM6RIYMyid0
          claim_id: c_88SLabTrhW4v6gsUPtDUf9
          source_id: s_3t7HWn5aVCYFtPceGKRQDm
          stance: supports
          locator: CBDB:336279
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_2Rg34TV_OsYBV27dJybaRs
        subject_person_id: p_BM6wMNHn5bHEHDoEeZirWe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xxLp0JHgp2-PJxhIqylXoF
          claim_id: c_2Rg34TV_OsYBV27dJybaRs
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tbav4zYN2TCDsypeHCvKiB
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳳（CBDB 205635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205635&o=json
            external_identifier: CBDB:205635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5cJbXaZPVCfH9EZ6651kPP
        status: active
        display_name: 王一鳳
        merged_into_person_id: null
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 336279） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5cJbXaZPVCfH9EZ6651kPP | 王一鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 336279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336279&o=json)
- [中国历代人物传记资料库：王一鳳（CBDB 205635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205635&o=json)
