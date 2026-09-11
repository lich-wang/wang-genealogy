---
schema: wang-person/v1
id: p_Tkju1SF5ExzXr1L1nE4gGc
status: active
merged_into: null
display_name: 王楙官
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SCZH1WHvMyMf1L59aXvuDu
        subject_person_id: p_Tkju1SF5ExzXr1L1nE4gGc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CjdTsCRzVgxCuKXR9pwN4A
          claim_id: c_SCZH1WHvMyMf1L59aXvuDu
          source_id: s_e8C5p1X35oLhyRt89RVCtM
          stance: supports
          locator: CBDB:638760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638760）
          source: &a1
            id: s_e8C5p1X35oLhyRt89RVCtM
            source_type: api_record
            title: 中国历代人物传记资料库：王楙官（CBDB 638760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638760&o=json
            external_identifier: CBDB:638760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DY7N38PJwxD2LLzvNJVfBn
        subject_person_id: p_Tkju1SF5ExzXr1L1nE4gGc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楙官，清人物。籍贯宛平，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DaFSIYgMejUFqdtvkOcVvn
          claim_id: c_DY7N38PJwxD2LLzvNJVfBn
          source_id: s_e8C5p1X35oLhyRt89RVCtM
          stance: supports
          locator: CBDB:638760
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
  descendants: []
  other: []
---

# 王楙官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楙官 | accepted |
| bio.summary | 王楙官，清人物。籍贯宛平，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楙官（CBDB 638760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638760&o=json)
