---
schema: wang-person/v1
id: p_3EWMbzE9qNNwBpG1g5gvmQ
status: active
merged_into: null
display_name: 王璽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5PcE6hYyNkhQjypYPDeCNw
        subject_person_id: p_3EWMbzE9qNNwBpG1g5gvmQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3krPjhcCh9WZNrfNJr43zX
          claim_id: c_5PcE6hYyNkhQjypYPDeCNw
          source_id: s_FA66f3d9q9458TK82NXRC5
          stance: supports
          locator: CBDB:231540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231540）
          source: &a1
            id: s_FA66f3d9q9458TK82NXRC5
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 231540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231540&o=json
            external_identifier: CBDB:231540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P95YXkUJThax7cPXExdRWk
        subject_person_id: p_3EWMbzE9qNNwBpG1g5gvmQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽，明人物。宣德八年進士，籍贯信陽，曾任衛指揮。（中国历代人物传记资料库 CBDB 231540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZsudiRzUALiJZjC3635mSv
          claim_id: c_P95YXkUJThax7cPXExdRWk
          source_id: s_FA66f3d9q9458TK82NXRC5
          stance: supports
          locator: CBDB:231540
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
  spouses:
    - claim:
        id: c_0hsOw1r38IoDO5fUFqS_Yz
        subject_person_id: p_3EWMbzE9qNNwBpG1g5gvmQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hPGFQeujgFGo78pUZnBQbM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbwRFbIkILm18nIlxaDDfv
          claim_id: c_0hsOw1r38IoDO5fUFqS_Yz
          source_id: s_a14wamMpNkQD_oaDaadCEk
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a14wamMpNkQD_oaDaadCEk
            source_type: api_record
            title: 中国历代人物传记资料库：周氏(王璽妻)（CBDB 557392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557392&o=json
            external_identifier: CBDB:557392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hPGFQeujgFGo78pUZnBQbM
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | 王璽，明人物。宣德八年進士，籍贯信陽，曾任衛指揮。（中国历代人物传记资料库 CBDB 231540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hPGFQeujgFGo78pUZnBQbM | 周氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璽（CBDB 231540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231540&o=json)
- [中国历代人物传记资料库：周氏(王璽妻)（CBDB 557392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557392&o=json)
