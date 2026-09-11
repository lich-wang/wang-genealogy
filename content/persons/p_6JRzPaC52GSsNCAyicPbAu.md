---
schema: wang-person/v1
id: p_6JRzPaC52GSsNCAyicPbAu
status: active
merged_into: null
display_name: 王彥和
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VVeJdAArp6zgiCF9bGsYqh
        subject_person_id: p_6JRzPaC52GSsNCAyicPbAu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9QhSpekn38ji75KUF1rSGa
          claim_id: c_VVeJdAArp6zgiCF9bGsYqh
          source_id: s_sYnE2bBNKa8VbRFGGNZGqE
          stance: supports
          locator: CBDB:316707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316707）
          source: &a1
            id: s_sYnE2bBNKa8VbRFGGNZGqE
            source_type: api_record
            title: 中国历代人物传记资料库：王彥和（CBDB 316707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316707&o=json
            external_identifier: CBDB:316707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_68ZShmN3N5JawNebeVeTzH
        subject_person_id: p_6JRzPaC52GSsNCAyicPbAu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥和，明人物。天順四年進士，曾任知縣。（中国历代人物传记资料库 CBDB 316707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LaGGwm4_hvxVH8KLX0qcMY
          claim_id: c_68ZShmN3N5JawNebeVeTzH
          source_id: s_sYnE2bBNKa8VbRFGGNZGqE
          stance: supports
          locator: CBDB:316707
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
        id: c_tHnmCKgJvKQRwRzr87Ih_V
        subject_person_id: p_6JRzPaC52GSsNCAyicPbAu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_G9tFhQ1WwsB9Terb7BAL5q
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_edeRBTBgv7Kr1tTnQ_38yI
          claim_id: c_tHnmCKgJvKQRwRzr87Ih_V
          source_id: s_sYnE2bBNKa8VbRFGGNZGqE
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G9tFhQ1WwsB9Terb7BAL5q
        status: active
        display_name: 王濬
        merged_into_person_id: null
  other: []
---

# 王彥和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥和 | accepted |
| bio.summary | 王彥和，明人物。天順四年進士，曾任知縣。（中国历代人物传记资料库 CBDB 316707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_G9tFhQ1WwsB9Terb7BAL5q | 王濬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥和（CBDB 316707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316707&o=json)
