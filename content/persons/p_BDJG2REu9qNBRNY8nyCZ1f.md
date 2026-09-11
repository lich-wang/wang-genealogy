---
schema: wang-person/v1
id: p_BDJG2REu9qNBRNY8nyCZ1f
status: active
merged_into: null
display_name: 王增
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8j8ZBhDMCdxCnW4BCAPoKs
        subject_person_id: p_BDJG2REu9qNBRNY8nyCZ1f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2a5SRL59PRo7FhjbPTDUiU
          claim_id: c_8j8ZBhDMCdxCnW4BCAPoKs
          source_id: s_SJ36gSFa9BF1UijtbLypHs
          stance: supports
          locator: CBDB:271031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271031）
          source: &a1
            id: s_SJ36gSFa9BF1UijtbLypHs
            source_type: api_record
            title: 中国历代人物传记资料库：王增（CBDB 271031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271031&o=json
            external_identifier: CBDB:271031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KRxcCcK18Gr1hKTWCuEbrd
        subject_person_id: p_BDJG2REu9qNBRNY8nyCZ1f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增，明人物。弘治十五年進士，籍贯潞州。（中国历代人物传记资料库 CBDB 271031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K-aGxu7RTqUChSqDzq5QY5
          claim_id: c_KRxcCcK18Gr1hKTWCuEbrd
          source_id: s_SJ36gSFa9BF1UijtbLypHs
          stance: supports
          locator: CBDB:271031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_RZ_Cs6Tou5eQ3ZJOJAaCC0
        subject_person_id: p_BDJG2REu9qNBRNY8nyCZ1f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4PsCtJUsnu3eY9rXNjF4Fo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9aGWVQfMZaSseKbfAeeV8f
          claim_id: c_RZ_Cs6Tou5eQ3ZJOJAaCC0
          source_id: s_rMiKQdLixLiHHyQLAuXGgm
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第三甲第三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rMiKQdLixLiHHyQLAuXGgm
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 68246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json
            external_identifier: CBDB:68246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.061Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PsCtJUsnu3eY9rXNjF4Fo
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增 | accepted |
| bio.summary | 王增，明人物。弘治十五年進士，籍贯潞州。（中国历代人物传记资料库 CBDB 271031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4PsCtJUsnu3eY9rXNjF4Fo | 王廷相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 68246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68246&o=json)
- [中国历代人物传记资料库：王增（CBDB 271031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271031&o=json)
