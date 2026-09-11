---
schema: wang-person/v1
id: p_6RCMAmhm7ABKUBxzvWbX1A
status: active
merged_into: null
display_name: 王騰程
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3G8r5kDchqbQKHHFSvqgpM
        subject_person_id: p_6RCMAmhm7ABKUBxzvWbX1A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰程
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPtFPd7VYEMnWBNfTDcjy5
          claim_id: c_3G8r5kDchqbQKHHFSvqgpM
          source_id: s_Tnw9rYtQtD7YYPTkC28Zz8
          stance: supports
          locator: CBDB:702574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702574）
          source: &a1
            id: s_Tnw9rYtQtD7YYPTkC28Zz8
            source_type: api_record
            title: 中国历代人物传记资料库：王騰程（CBDB 702574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702574&o=json
            external_identifier: CBDB:702574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rJ4XSxMHrJPuT5JTD115mh
        subject_person_id: p_6RCMAmhm7ABKUBxzvWbX1A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王騰程，明人物。籍贯元和，入仕鄉貢舉人，曾任府推官、縣教諭。（中国历代人物传记资料库 CBDB 702574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xs6sSpunrtUVYej27YhFz5
          claim_id: c_rJ4XSxMHrJPuT5JTD115mh
          source_id: s_Tnw9rYtQtD7YYPTkC28Zz8
          stance: supports
          locator: CBDB:702574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_29Q2A609FEqfxVQJ9BNQSW
        subject_person_id: p_6RCMAmhm7ABKUBxzvWbX1A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v5q8hACD2MdAUcJvnY39At
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNA40GZZG6OuRmR9df5nOK
          claim_id: c_29Q2A609FEqfxVQJ9BNQSW
          source_id: s_Tnw9rYtQtD7YYPTkC28Zz8
          stance: supports
          locator: "(乾隆)元和縣志: 三十六卷，lgid=178288：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v5q8hACD2MdAUcJvnY39At
        status: active
        display_name: 王佐聖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王騰程

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王騰程 | accepted |
| bio.summary | 王騰程，明人物。籍贯元和，入仕鄉貢舉人，曾任府推官、縣教諭。（中国历代人物传记资料库 CBDB 702574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_v5q8hACD2MdAUcJvnY39At | 王佐聖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王騰程（CBDB 702574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702574&o=json)
